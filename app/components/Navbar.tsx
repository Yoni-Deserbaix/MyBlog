import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Github, Linkedin, Mail, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../theme/ThemeToggle";

export default function NavBar() {
  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0 bg-background z-10">
        <div className="justify-between px-4 mx-auto max-w-7xl items-center flex">
          <div>
            <div className="flex justify-between py-5 md:py-5 md:block">
              <Menubar className="hidden max-sm:block my-[0.3rem]">
                <MenubarMenu>
                  <MenubarTrigger>
                    <MenuIcon />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <Link href="/">Blog</Link>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <Link
                        href="https://yoni-deserbaix-portfolio.vercel.app/"
                        target="_blank"
                      >
                        Portfolio
                      </Link>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <Link
                        href="https://github.com/Yoni-Deserbaix"
                        target="_blank"
                      >
                        Github{" "}
                      </Link>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <Link
                        href="https://www.linkedin.com/in/yoni-deserbaix/"
                        target="_blank"
                      >
                        Linkedin
                      </Link>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <Link href="mailto:yonideserbaix@gmail.com">Mail</Link>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              {/* LOGO */}
              <div className="flex translate-y-2 pl-4 underline underline-offset-8 decoration-green-500 -rotate-2">
                <Link href="/">
                  <Image
                    src="https://github.com/Yoni-Deserbaix/formation-Next.JS/blob/main/app/flavicon.png?raw=true"
                    alt="MyBlog Logo"
                    width={200}
                    height={200}
                    className="w-12 -translate-y-2 hover:scale-110 transition-all"
                  />
                </Link>
                <Link href="/">
                  <div
                    className="text-2xl font-bold flex"
                    aria-label="Navigate to the home page"
                  >
                    MyBlog
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="block max-sm:hidden">
              <ul className="items-center justify-center flex">
                <li>
                  <Link href="/">
                    <Button variant="ghost" className="text-lg font-semibold">
                      Blog
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://yoni-deserbaix-portfolio.vercel.app/"
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
                    <Button
                      variant="ghost"
                      aria-label="Navigate to the Github account"
                    >
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
                    <Button
                      variant="ghost"
                      aria-label="Navigate to the LinkedIn account"
                    >
                      <Linkedin />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:yonideserbaix@gmail.com">
                    {/* Mail  */}
                    <Button variant="ghost" aria-label="email">
                      <Mail />
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
