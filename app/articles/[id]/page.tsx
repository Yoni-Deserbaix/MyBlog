import * as React from "react";

export interface IAppProps {
  params: {
    id: number;
  };
}

export default function App({ params }: IAppProps) {
  return <div>You are on article {params.id}</div>;
}
