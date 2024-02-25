import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ResolvingMetadata, Metadata } from "next";

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
    authors:[
      {
        name: article.author,
      },
    ],
    openGraph: {
      images: [article.linkImage, ...previousImages],
    },
  };
}

// [] = route dynamique
export default async function App({ params }: Props) {
  const data = await getData(params.id);
  // console.log(data);
  return (
    <div className="container card w-96 bg-base-100 shadow-xl">
      <div className="card-actions justify-start">
        <Link
          key={data.id}
          href={`/`}
          className="btn btn-outline btn-secondary"
        >
          Back
        </Link>
      </div>
      You are on the article {params.id}
      <h1 className="titre">{data.title}</h1>
      <figure>
        <Image
          src={data.linkImage}
          width={500}
          height={500}
          alt="Article Image"
          className="w-full object-cover"
        />
      </figure>
      <p> {data.content}</p>
    </div>
  );
}
