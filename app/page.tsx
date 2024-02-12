import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>Welcome ! </h1>
      <Link href="/login">Login</Link>
      <br />
      <Link href="/register">register</Link>
      <br />
      <Link href="/articles">articles</Link>
    </main>
  );
}
