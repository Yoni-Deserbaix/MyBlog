import clsx from "clsx";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yoni-deserbaix-my-blog.vercel.app/"),

  title: "MyBlog - Yoni Deserbaix",
  authors: {
    name: "Yoni Deserbaix",
  },
  description: "MyBlog - Yoni Deserbaix",
  icons: {
    icon: [
      "https://github.com/Yoni-Deserbaix/formation-Next.JS/blob/main/app/flavicon.png?raw=true",
    ],
  },
  openGraph: {
    title: "MyBlog - Yoni Deserbaix",
    description: "MyBlog - Yoni Deserbaix",
    url: "https://yoni-deserbaix-my-blog.vercel.app/",
    siteName: "MyBlog - Yoni Deserbaix",
    images: "/assets/metaImage.png",
    type: "website",
  },
  keywords: [
    "Blog",
    "Yoni Deserbaix",
    "Développeur Frontend",
    "React",
    "Next.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, "bg-background overflow-x-hidden")}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
