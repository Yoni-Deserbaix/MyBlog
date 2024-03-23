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

      <div className="flex justify-center text-2xl font-bold mt-28">
        Articles récents
      </div>

      <div className="container gap-5 flex-wrap">
        {articles.map((article: ArticleType) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={article.id}>
            <Card>
              <CardHeader>
                <figure>
                  <Image
                    src={article.linkImage}
                    width={1000}
                    height={1000}
                    alt="Article Image"
                    className="w-full object-cover hover:transform hover:scale-110 transition duration-300 ease-in-out"
                  />
                </figure>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.date}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link
                  href={`/articles/${article.id}`}
                  className="btn rounded-full btn-outline font-bold"
                >
                  Visiter l'article
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
