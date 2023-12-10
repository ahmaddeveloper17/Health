import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userName, password } = await request.json();
  await connectMongoDB();
  await Topic.create({ userName, password });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}
