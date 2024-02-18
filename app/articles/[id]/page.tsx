import React from "react";

type Props = {
  params: {
    id: number;
  };
};

const getData = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:4000/articles/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error fetching articles", err);
  }
};

// [] = route dynamique
export default async function App({ params }: Props) {
  const data = await getData(params.id);
  // console.log(data);
  return (
    <div className="container">
      You are on the article {params.id}
      <h1 className="titre">{data.title}</h1>
      <p> {data.content}</p>
    </div>
  );
}
