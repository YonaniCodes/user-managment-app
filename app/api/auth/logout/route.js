// app/api/auth/logout/route.js
import { serialize } from "cookie";
import { NextResponse } from "next/server"; // Import NextResponse to handle the response

export async function POST(req) {
  // Clear the token from cookies by setting maxAge to -1
  const headers = new Headers();
  headers.set(
    "Set-Cookie",
    serialize("token", "", { path: "/", maxAge: -1 }) // This removes the token cookie
  );

  // Optionally, you can invalidate other sessions or do other cleanup

  // Respond with a success message
  return new NextResponse(
    JSON.stringify({ message: "Logged out successfully" }),
    { status: 200, headers }
  );
}
