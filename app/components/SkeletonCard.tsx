import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SkeletonCard() {
  return (
    <div>
      <Card className="w-full h-[500px]">
        <CardHeader>
          <Skeleton className="h-[300px] w-full rounded-xl" />
          <CardTitle className="text-xl pt-4">
            <Skeleton className="h-6 w-[400px]" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-[100px]" />
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end ">
          <Skeleton className="h-10 w-[200px]" />
        </CardFooter>
      </Card>
    </div>
  );
}
