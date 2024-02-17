import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const getData = async () => {
  const res = await fetch("http://localhost:4000/articles");
  const data = await res.json();
  return data;
};

type Article = {
  id: number;
  title: string;
  author: string;
  date: string;
  user_id: number;
};

export default async function Home() {
  const articles = await getData();
  console.log(articles);

  return (
    <main className="">
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
          <div key={article.id} className="card">
            <h3>{article.id}</h3>
            <p>{article.author}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
