"use client";
import { useEffect, useState } from "react";
import Glow from "../components/ui/Glow";
import ArticleCard from "./components/ArticleCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import { supabase } from "./config/supabase";

import { ArticleType } from "./types";

export default function Home() {
  const [Article, setArticle] = useState<any>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("articles").select();
        if (error) {
          throw new Error(error.message);
        }
        // sort id articles in descending order
        const sortedArticles = data.sort(
          (a: ArticleType, b: ArticleType) => b.id - a.id
        );
        setArticle(sortedArticles);
      } catch (error) {
        setError(error);
      } finally {
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-center mt-12">Erreur : {error}</div>;
  }

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

        {Article.map((article: ArticleType, index: number) => (
          <ArticleCard key={index} article={article} />
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
