import Image from "next/image";
import Link from "next/link";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

// Definition of types
type Article = {
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
  const articles: Article[] = await getArticles();

  return (
    <main>
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
              <h2 className="card-title">{article.title}</h2>
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
}
