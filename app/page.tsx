import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const getData = async () => {
  try {
    const res = await fetch(`http://localhost:4000/articles`);
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
    <main>
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

      <div className="container">
        {articles.map((article: Article) => (
          <Link
            key={article.id}
            className="card"
            href={`/articles/${article.id}`}
          >
            {article.id}. {article.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
