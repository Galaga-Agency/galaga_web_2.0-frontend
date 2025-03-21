import { NextResponse } from "next/server";

let blogPosts: any[] = []; // 🔴 Temporary (Replace with DB)

export async function POST(req: Request) {
  const newPost = await req.json();
  blogPosts.push(newPost); // 🔴 Store in database instead

  return NextResponse.json({ message: "Post created!" }, { status: 200 });
}

export async function GET() {
  return NextResponse.json(blogPosts);
}
