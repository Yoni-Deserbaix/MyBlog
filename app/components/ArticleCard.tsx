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
import Title from "./Title";

import { ArticleType } from "../types";

type ArticleProps = {
  article: ArticleType;
};

export default function ArticleCard({ article }: ArticleProps) {
  return (
    <div className="card w-1/3 bg-base-100 shadow-xl max-lg:w-1/2 max-md:w-2/3 max-sm:w-11/12">
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
          <CardDescription>
            {new Date(article.date).toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Link href={`/articles/${article.id}`}>
            <Button variant="outline" size="lg" className="rounded-xl text-lg">
              Visiter l'article
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
