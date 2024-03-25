import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ResolvingMetadata, Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Title from "@/app/components/Title";
import Glow from "@/app/components/Glow";

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
      <div className="mt-28 flex justify-center items-center gap-10 flex-col"></div>
      <CardTitle className="text-center text-3xl font-bold max-sm:text-2xl">
        <Title
          text={data.title}
          className="m-3 flex flex-col items-center justify-center text-3xl"
        />
        <Glow
          className="absolute z-10 w-0 h-0 bg-white shadow-glow rounded-full -right-32 mt-16 max-sm:-right-48"
          style={{ boxShadow: "0 0 200px 130px #c026d3" }}
        />
      </CardTitle>
      <CardDescription className="text-center">
        {data.date} - {data.author}
      </CardDescription>
      <Card className="flex flex-col m-auto mt-14 bg-base-100 shadow-xl w-1/3 bg-base-100 max-xl:w-2/4 max-lg:w-3/4 max-md:w-2/3 max-sm:w-11/12">
        <CardHeader>
          <figure>
            <Image
              src={data.idLinkImage || data.linkImage}
              width={1000}
              height={1000}
              alt="Article Image"
              className="w-full rounded-xl"
            />
          </figure>
        </CardHeader>
        <CardFooter>
          <p className="my-10 w-full m-auto font-medium text-lg">
            {data.content.split("\n").map((line: string, index: number) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </CardFooter>
      </Card>
      <Glow
        className="absolute z-10 w-0 h-0 bg-white shadow-glow rounded-full -left-32 mb-24 max-sm:-left-48"
        style={{ boxShadow: "0 0 200px 130px #22c55e" }}
      />
      <Footer />
    </>
  );
}
