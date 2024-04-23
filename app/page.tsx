import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Glow from "./components/Glow";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

// Definition of types
type ArticleType = {
  id: number;
  title: string;
  author: string;
  date: string;
  user_id: number;
  linkImage: string;
};

async function getArticles() {
  try {
    const res = await fetch("https://data-blog.onrender.com/articles", {
      // Revalidation data every 10 seconds
      next: {
        revalidate: 10,
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
}

export default async function Home() {
  const articles: ArticleType[] = await getArticles();

  return (
    <main>
      <Navbar />

      <Title
        text="Artciles récents"
        className="flex flex-col mt-28 items-center justify-center text-3xl -rotate-3"
      />

      <div className="flex items-center gap-10 flex-col pt-14">
        <Glow
          className="absolute z-10 w-0 h-0 bg-white shadow-glow rounded-full -left-32 max-sm:-left-48"
          style={{ boxShadow: "0 0 200px 130px #22c55e" }}
        />

        {articles.map((article: ArticleType, index: number) => (
          <div
            className="card w-1/3 bg-base-100 shadow-xl max-lg:w-1/2 max-md:w-2/3 max-sm:w-11/12"
            key={article.id}
          >
            <Card>
              <CardHeader>
                <figure>
                  <Image
                    src={article.linkImage}
                    width={2000}
                    height={2000}
                    alt="Article Image"
                    className="w-full rounded-xl"
                  />
                </figure>
                <Link href={`/articles/${article.id}`}>
                  <CardTitle className="text-xl pt-4">
                    <Title
                      text={article.title}
                      className="m-3 justify-center text-md"
                    />
                  </CardTitle>
                </Link>
                <CardDescription>{article.date}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-end">
                <Link href={`/articles/${article.id}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-xl text-lg"
                  >
                    Visiter l'article
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <div className="glow -right-32 max-md:-right-40"></div>
      <Glow
        className="absolute z-10 w-0 h-0 bg-white shadow-glow rounded-full -right-32 mb-24 max-md:-right-48"
        style={{ boxShadow: "0 0 200px 130px #c026d3" }}
      />
      <Footer />
    </main>
  );
}
