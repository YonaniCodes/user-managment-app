import { serialize } from "cookie"; // Correct import
import jwt from "jsonwebtoken";

export function signJwtAndCookie(headers, payload) {
  // Create JWT token
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expiration time
  });

  headers.set(
    "Set-Cookie",
    serialize("token", token, {
      httpOnly: true, // Makes the cookie inaccessible to JavaScript
      secure: process.env.NODE_ENV === "production", // Set secure cookie in production only
      maxAge: 3600, // 1 hour
      path: "/",
      sameSite: "Strict", // Additional protection for CSRF attacks
    })
  );

  return headers;
}
