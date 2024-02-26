import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import Theme from "./ui/ThemeController";
// import ThemeController from "./ui/ThemeController";
import Navbar from "./ui/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyBlog | Home",
  description: "My blog | Home",
};

const getData = async () => {
  try {
    // Fetch data from local development server (db.json)
    // const res = await fetch(`http://localhost:4000/articles`, {
    //   // Revalidation data every 10sec
    //   next: {
    //     revalidate: 10,
    //   },
    // });

    // Fetch data from the the Next.js API route
    const res = await fetch(`http://localhost:3000/api/articles`, {
      // Revalidation data every 10sec
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
  linkImage: string;
};

export default async function Home() {
  // Get data from local development server (db.json)
  // const articles = await getData();
  //  console.log(articles);

  // Get data from the Next.js API route
  const { data: articles } = await getData();
  //  console.log(articles);

  return (
    <main className="">
      <Navbar />

      {/* Client side component */}
      <div className="m-12">
        {/* <ThemeController /> */}
      </div>
      <Button />
      {/* Button to add a article  */}
      <div className="m-5 card-actions justify-start">
        <Link href={"/articles/create"} className="btn rounded-full ">
          Ajouter un article
        </Link>
      </div>

      {/* Card for articles  */}
      <div className="container gap-5 flex-wrap">
        {articles.map((article: Article) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
                src={article.linkImage}
                width={250}
                height={250}
                alt="Article Image"
                className="w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {" "}
                {article.id}. {article.title}
              </h2>

              <div className="card-actions justify-end">
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="btn rounded-full btn-outline "
                >
                  Visiter l'article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
