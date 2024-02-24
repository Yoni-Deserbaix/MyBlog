import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: number;
  };
};

export const revalidate = 1000;

const getData = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:4000/articles/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error fetching articles", err);
  }
};

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
