import * as React from "react";

export interface IAppProps {
  params: {
    id: number;
  };
}

// [] = route dynamique 
export default function App({ params }: IAppProps) {
  return <div>You are on article {params.id}</div>;
}
