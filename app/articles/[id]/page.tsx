import Title from "@/app/components/Title";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

type ArticleTypeByID = {
  params: {
    id: number;
  };
};

export const revalidate = 1000;

import { supabase } from "@/app/config/supabase";
import Glow from "@/components/ui/Glow";

export default async function Post({ params: { id } }: ArticleTypeByID) {
  const { data } = await supabase
    .from("articles")
    .select()
    .match({ id })
    .single();
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
        {new Date(data.date).toLocaleDateString()} - {data.author}
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
