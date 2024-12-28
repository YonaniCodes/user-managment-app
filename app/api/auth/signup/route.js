import { hash } from "bcryptjs";
import prisma from "@/app/_lib/prisma";
import { NextResponse } from "next/server"; // Import NextResponse
import { signJwtAndCookie } from "@/app/_lib/auth";

export async function POST(req) {
  const { email, password, username } = await req.json(); // Parse JSON body from the request

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  // Hash the password
  const hashedPassword = await hash(password, 10);

  try {
    // Create new user in the database

    console.log(email, username, hashedPassword);
    const user = await prisma.user.create({
      data: {
        email, // Email address
        password: hashedPassword, // Hashed password
        username, // Username
        role: "user",
        joinedAt: new Date(),
        lastLogin: new Date(),
        status: "active",
      },
    });

    // Set token in cookies
    let headers = new Headers();

    headers = signJwtAndCookie(headers, { userId: user.id });

    return new Response(
      JSON.stringify({ message: "signed up in successfully", user }),
      {
        headers,
        status: 200,
      }
    );
    // console.log(user);
    // return NextResponse.json({
    //   message: "User created successfully",
    //   user: {
    //     id: user.id,
    //     email: user.email,
    //     name: user.username,
    //   },
    // });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
