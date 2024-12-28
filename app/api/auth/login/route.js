import bcrypt from "bcryptjs";

import { serialize } from "cookie"; // Correct import
import prisma from "@/app/_lib/prisma";
import { signJwtAndCookie } from "@/app/_lib/auth";

export async function POST(req) {
  // Check if the request body is empty
  if (!req.body) {
    return new Response("Request body is empty", { status: 400 });
  }
  console.log(req.body);

  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: "Email and password are required" }),
      { status: 400 }
    );
  }

  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return new Response(
      JSON.stringify({ error: "Invalid email or password" }),
      { status: 401 } // Unauthorized status code
    );
  }

  // Compare the password with the hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return new Response(
      JSON.stringify({ error: "Invalid email or password" }),
      { status: 401 } // Unauthorized status code
    );
  }

  // Create JWT token and sign cookie
  let headers = new Headers();
  headers = signJwtAndCookie(headers, { userId: user.id });

  // Set token in cookies

  return new Response(JSON.stringify({ message: "Logged in successfully" }), {
    headers,
    status: 200,
  });
}
