import Title from "@/app/components/Title";
import { supabase } from "@/app/config/supabase";
import Glow from "@/components/ui/Glow";
import { Metadata, ResolvingMetadata } from "next";
import ArticleCardByID from "../../components/ArticleCardByID";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

type ArticleTypeByID = {
  params: {
    id: number;
  };
};

// Dynamic Metadata
export async function generateMetadata(
  { params }: ArticleTypeByID,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const { data } = await supabase
    .from("articles")
    .select()
    .match({ id })
    .single();
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.title,
    description: data.content,
    authors: [
      {
        name: data.author,
      },
    ],
    openGraph: {
      images: [data.linkImage, ...previousImages],
    },
  };
}

export const revalidate = 10;

export default async function Post({ params: { id } }: ArticleTypeByID) {
  const { data } = await supabase
    .from("articles")
    .select()
    .match({ id })
    .single();

  return (
    <div>
      <Navbar />
      <div className="mt-28 flex justify-center items-center gap-10 flex-col" />
      <div className="text-center text-3xl font-bold max-sm:text-2xl">
        <Title
          text={data.title}
          className="m-3 flex flex-col items-center justify-center text-3xl"
        />
        <Glow
          className="absolute z-10 w-0 h-0 bg-white shadow-glow rounded-full -right-32 mt-16 max-sm:-right-48"
          style={{ boxShadow: "0 0 200px 130px #c026d3" }}
        />
      </div>
      <p className="text-center text-sm text-gray-500">
        {data && (
          <>
            {new Date(data.date).toLocaleDateString()} - {data.author}
          </>
        )}
      </p>

      <ArticleCardByID article={data} />
      <Glow
        className="absolute z-10 w-0 h-0 bg-white shadow-glow rounded-full -left-32 mb-24 max-sm:-left-48"
        style={{ boxShadow: "0 0 200px 130px #22c55e" }}
      />
      <Footer />
    </div>
  );
}
