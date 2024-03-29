import { error } from "console";
import { NextResponse } from "next/server";

type RouteType = {
  params: {
    id: number;
  };
};

const getOneArticle = async (id: number) => {
  try {
    const res = await fetch(`https://data-blog.onrender.com/articles/${id}`);
    const data = res.json();
    return data;
  } catch (err) {
    console.log("Error fetching articles", err);
  }
};

// GET
export async function GET(req: Request, { params }: RouteType) {
  const data = await getOneArticle(params.id);
  return NextResponse.json({
    message: "Data received successfully from Next.js API",
    data,
  });
}

// PUT
export async function PUT(req: Request, { params }: RouteType) {
  const { title, content, author } = await req.json();

  const article = await getOneArticle(params.id);

  const updatedArticle = {
    ...article,
    title: title || article.title,
    content: content || article.content,
    author: author || article.author,
  };

  await fetch(`https://data-blog.onrender.com/articles/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedArticle),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return NextResponse.json({
    message: "Data edited successfully from Next.JS api",
    data: updatedArticle,
  });
}

// DELETE
export async function DELETE(req: Request, { params }: RouteType) {
  await fetch(`http://localhost:4000/articles/${params.id}`, {
    method: "DELETE",
  });

  return NextResponse.json({
    message: "Data deleted successfully from Next.JS api",
  });
}