import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const getData = async () => {
  try {
    // Revalidation data
    const res = await fetch(`http://localhost:4000/articles`, {
      next: {
        revalidate: 10,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error fetching articles", err);
  }
};

// Definition of types
type Article = {
  id: number;
  title: string;
  author: string;
  date: string;
  user_id: number;
};

export default async function Home() {
  const articles = await getData();
  // console.log(articles);

  return (
    <main className="px-[5rem]  h-[100%]">
      <h1>Welcome ! </h1>

      {/* route conventionnelle */}
      <Link href="/login">Login</Link>
      <br />
      <Link href="/register">register</Link>
      <br />
      {/* route dynamique */}
      <Link href="/articles">articles</Link>
      <br />
      {/* Client side component */}
      <Button />
      <div className="m-5 card-actions justify-start">
        <Link href={"/articles/create"} className="btn btn-secondary">
          Add a article
        </Link>
      </div>
      <div className="flex gap-5 flex-wrap">
        {articles.map((article: Article) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                {" "}
                {article.id}. {article.title}
              </h2>
              <div className="card-actions justify-end">
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="btn btn-accent"
                >
                  Visit the article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
