import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Loading from "../loading";
import { ArticleType } from "../types";

type ArticleByIDType = {
  article: ArticleType;
};

export default function ArticleByIDType({ article }: ArticleByIDType) {
  return (
    <div>
      <Card className="flex flex-col m-auto mt-14 bg-base-100 shadow-xl w-1/3 bg-base-100 max-xl:w-2/4 max-lg:w-3/4 max-md:w-2/3 max-sm:w-11/12">
        <CardHeader>
          <figure>
            {!article ? (
              <Loading />
            ) : (
              <Image
                src={article.idLinkImage || article.linkImage}
                width={1000}
                height={1000}
                alt="Article Image"
                className="w-full rounded-xl"
              />
            )}
          </figure>
        </CardHeader>
        <CardFooter>
          <p className="my-10 w-full m-auto font-medium text-lg">
            {article &&
              article.content.split("\n").map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
