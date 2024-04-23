import clsx from "clsx";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoni - MyBlog",
  description: "Yoni - MyBlog",
  icons: {
    icon: [
      "https://github.com/Yoni-Deserbaix/formation-Next.JS/blob/main/app/flavicon.png?raw=true",
    ],
  },
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
