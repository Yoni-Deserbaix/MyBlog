"use client";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex  justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-xl  font-bold"
                  >
                    <Image
                      src="https://github.com/Yoni-Deserbaix/formation-Next.JS/blob/main/app/flavicon.png?raw=true"
                      alt="MyBlog Logo"
                      width={200}
                      height={200}
                      className="w-12"
                    />
                    MyBlog
                  </Button>
                </h2>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li>
                  <Link href="/">
                    <Button variant="ghost" className="text-lg font-semibold">
                      Blog
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://yoni-deserbaix-potfolio.vercel.app/"
                    target="_blank"
                   
                  >
                    <Button variant="ghost" className="text-lg font-semibold">
                      Portfolio
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Yoni-Deserbaix"
                    target="_blank"
                   
                  >
                    {/* <!-- Github -->  */}
                    <Button variant="ghost">
                      <Github />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/yoni-deserbaix/"
                    target="_blank"
                   
                  >
                    {/* <!-- Linkedin --> */}
                    <Button variant="ghost">
                      <Linkedin />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:yonideserbaix@gmail.com"
                   
                  >
                    {/* Mail  */}
                    <Button variant="ghost">
                      <Mail />
                    </Button>
                  </Link>
                </li>
                <li className="pl-10">
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
