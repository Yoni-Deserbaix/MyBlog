import * as React from "react";
import Link from "next/link";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/articles/1">Article 1</Link>
        </li>
        <li>
          <Link href="/articles/2">Article 2</Link>
        </li>
        <li>
          <Link href="/articles/3">Article 3</Link>
        </li>
        <li>
          <Link href="/articles/4">Article 4</Link>
        </li>
      </ul>
    </div>
  );
}
