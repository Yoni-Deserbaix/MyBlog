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
        {data.title}
      </CardTitle>
      <CardDescription className="text-center">
        {data.date} - {data.author}
      </CardDescription>
      <Card className="flex flex-col m-auto mt-14 w-1/3 bg-base-100 shadow-xl max-lg:w-1/2 max-md:w-2/3 max-sm:w-11/12 out">
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
          <p className="my-10 w-10/12 m-auto font-medium text-lg">
            {data.content.split("\n").map((line: string, index: number) => (
              <span key={index} className="m-[-2rem]">
                {line}
                <br />
              </span>
            ))}
          </p>
        </CardFooter>
      </Card>

      <Footer />
    </>
  );
}
