import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ResolvingMetadata, Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type ArticleType = {
  params: {
    id: string;
  };
};

export const revalidate = 1000;

const getData = async (id: string) => {
  try {
    const res = await fetch(`https://data-blog.onrender.com/articles/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error fetching articles", err);
  }
};

// Dynamic Metadata
export async function generateMetadata(
  { params }: ArticleType,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const article = await getData(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: article.title,
    description: article.content,
    authors: [
      {
        name: article.author,
      },
    ],
  };
}

// [] = route dynamique
export default async function App({ params }: ArticleType) {
  const data = await getData(params.id);
  // console.log(data);
  return (
    <>
      <Navbar />
      <div className="mt-28"></div>
      <div className="artboard">
        <div className="card-actions justify-start">
          <Link
            key={data.id}
            href={`/`}
            className="btn rounded-full btn-sm btn-outline mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="w-5 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
        </div>
        <h1 className="titre">{data.title}</h1>
        <p className="text-sm text-center font-medium">
          {" "}
          {data.date} - {data.author}
        </p>
        <figure>
          <Image
            src={data.idLinkImage || data.linkImage}
            width={1000}
            height={1000}
            alt="Article Image"
            className="w-3/4 mt-5 m-auto"
          />
        </figure>
        <p className="my-10 w-3/4 m-auto font-medium">
          {data.content.split("\n").map((line: string, index: number) => (
            <span key={index} className="m-[-2rem]">
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <Footer />
    </>
  );
}
