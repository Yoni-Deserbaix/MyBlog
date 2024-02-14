import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function Home() {

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
      <Button />
    </main>
  );
}
