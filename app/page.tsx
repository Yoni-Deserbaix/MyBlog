"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import { useState, useEffect } from "react";

// Definition of types
type Article = {
  id: number;
  title: string;
  author: string;
  date: string;
  user_id: number;
  linkImage: string;
};

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://data-blog.onrender.com/articles`);
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.log("Error fetching articles", err);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="">
      <Navbar />

      <div className="flex justify-center text-2xl font-bold mt-28">
        Articles récents
      </div>

      <div className="container gap-5 flex-wrap">
        {articles.map((article: Article) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={article.id}>
            <figure>
              <Image
                src={article.linkImage}
                width={1000}
                height={1000}
                alt="Article Image"
                className="w-full object-cover hover:transform hover:scale-110 transition duration-300 ease-in-out"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {article.id}. {article.title}
              </h2>
              <div className="flex start">{article.date}</div>

              <div className="card-actions justify-end">
                <Link
                  href={`/articles/${article.id}`}
                  className="btn rounded-full btn-outline font-bold"
                >
                  Visiter l'article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Home;
