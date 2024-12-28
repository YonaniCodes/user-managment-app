import { NextResponse } from "next/server";

import prisma from "@/app/_lib/prisma";

export async function GET(req) {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
