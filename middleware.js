import { NextResponse } from "next/server";

// Middleware function
export function middleware(request) {
  console.log("Middleware executed", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  // Access cookies directly from request.cookies
  const cookies = request.cookies;
  const token = cookies.get("token"); // Get token from cookies

  // If there's a token or if the user is trying to access login or register, allow the request
  if (token || pathname === "/login" || pathname === "/signup")
    return NextResponse.next(); // Proceed with the request

  // Redirect to login page if no token is found
  return NextResponse.redirect(new URL("/login", request.url));
}

// Define the paths to apply the middleware to
export const config = {
  matcher: ["/users", "/profile"], // Add any protected routes you need
};
