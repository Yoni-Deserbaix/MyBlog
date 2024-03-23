"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Github, Linkedin, Mail } from "lucide-react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="btn btn-ghost text-2xl  font-bold pb-[50px]">
                  <img
                    src="https://github.com/Yoni-Deserbaix/formation-Next.JS/blob/main/app/flavicon.png?raw=true"
                    alt="MyBlog Logo"
                    width={50}
                  />
                  MyBlog
                </h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                      color="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                      color="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="btn btn-ghost mb-3 pb-6 text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0  font-semibold grid">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li>
                <li className="btn btn-ghost mb-3 pb-6 text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0  font-semibold grid">
                  <Link
                    href="https://yoni-deserbaix-potfolio.vercel.app/"
                    target="_blank"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="btn btn-ghost mb-3 text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0  font-semibold grid">
                  <Link
                    href="https://github.com/Yoni-Deserbaix"
                    target="_blank"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {/* <!-- Github -->  */}
                    <Github />
                  </Link>
                </li>
                <li className="btn btn-ghost mb-3  text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0  font-semibold grid">
                  <Link
                    href="https://www.linkedin.com/in/yoni-deserbaix/"
                    target="_blank"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {/* <!-- Linkedin --> */}
                    <Linkedin />

                  </Link>
                </li>
                <li className="btn btn-ghost mb-3  text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0  font-semibold grid">
                  <Link
                    href="mailto:yonideserbaix@gmail.com"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {/* Mail  */}
                   <Mail />
                  </Link>
                </li>
                  <ThemeToggle />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
