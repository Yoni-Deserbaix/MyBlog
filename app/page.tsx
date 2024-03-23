import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

      <div className="flex justify-center text-3xl font-bold mt-28 max-sm:text-2xl">
        Articles récents
      </div>

      <div className="flex items-center gap-10 flex-col pt-14">
        {articles.map((article: ArticleType) => (
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
                    className="w-full  hover:opacity-60 transition duration-300 rounded-xl"
                  />
                </figure>
                <CardTitle className="text-xl pt-4">{article.title}</CardTitle>
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
      <Footer />
    </main>
  );
}
