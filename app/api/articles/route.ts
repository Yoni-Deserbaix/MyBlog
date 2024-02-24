import { NextResponse } from "next/server";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:4000/articles");
    const data = res.json();
    return data;
  } catch (err) {
    console.log("Error fetching articles", err);
  }
};

// GET
export async function GET(req: Request) {
  const data = await getData();
  return NextResponse.json({
    message: "Data received successfully form nextjs api",
    data,
  });
}
