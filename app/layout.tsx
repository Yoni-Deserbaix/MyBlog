import type { Metadata } from "next";
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
    <html lang="en" data-theme="black">
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
