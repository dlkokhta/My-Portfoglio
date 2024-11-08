import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Head from "next/head";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dimitri Kokhtashvili| Full-Stack Developer | React/Next/Express.js",
  description:
    "Experienced Full-Stack Developer skilled in React, Node.js, and MongoDB, building dynamic and responsive web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={roboto.className}>
        <div className="lg:hidden">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
