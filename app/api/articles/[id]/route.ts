import { NextResponse } from "next/server";

type RouteParams = {
  params: {
    id: number;
  };
};

const getOneArticle = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:4000/articles/${id}`);
    const data = res.json();
    return data;
  } catch (err) {
    console.log("Error fetching articles", err);
  }
};

// GET
export async function GET(req: Request, { params }: RouteParams) {
  const data = await getOneArticle(params.id);
  return NextResponse.json({
    message: "Data received successfully from Next.js API",
    data,
  });
}
