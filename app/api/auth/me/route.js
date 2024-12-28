import { NextResponse } from "next/server";
import * as cookie from "cookie";
import prisma from "@/app/_lib/prisma";
import jwt from "jsonwebtoken";

export async function GET(req) {
  console.log("getting .................. sessiuion");
  const cookies = cookie.parse(req.headers.get("Cookie") || "");
  const token = cookies.token;

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    console.log(user);

    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
