import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ResolvingMetadata, Metadata } from "next";
import Navbar from "../../ui/Navbar";
import Footer from "../../ui/Footer";

type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 1000;

const getData = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:4000/articles/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error fetching articles", err);
  }
};

// Dynamic Metadata
export async function generateMetadata(
  { params }: Props,
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
export default async function App({ params }: Props) {
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
        <figure>
          <Image
            src={data.linkImage}
            width={500}
            height={500}
            alt="Article Image"
            className="w-full object-cover mt-10"
          />
        </figure>
        <p className="mt-10"> {data.content}</p>
      </div>
      <Footer />
    </>
  );
}
