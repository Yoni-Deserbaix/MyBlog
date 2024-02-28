import { NextResponse } from "next/server";

// test GET method 
export async function GET(req: Request) {
  return NextResponse.json({
    message: "Hello world",
    data: {
      name: "John Doe",
    },
  });
}
