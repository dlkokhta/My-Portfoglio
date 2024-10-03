import Head from "next/head";
import React from "react";
import HomePage from "./home/page";
export default function Home() {
  return (
    <>
      <Head>
        <title>Dimitri Kokhtashvili - Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore Dimitri's full-stack development projects, skills, and experience in full-stack development."
        />
        <meta
          name="keywords"
          content="Dimitri Kokhtashvili, portfolio, full-stack developer, Next.js, React, JavaScript"
        />
        <meta property="og:title" content="Dimitri Kokhtashvili - Portfolio" />
        <meta
          property="og:description"
          content="Explore Dimitri's full-stack development projects and skills."
        />
        <meta
          property="og:image"
          content="https://my-portfoglio.vercel.app/myPhoto.png"
        />
        <meta property="og:url" content="https://my-portfoglio.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dimitri Kokhtashvili - Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Dimitri's full-stack development projects and skills."
        />
        <meta
          name="twitter:image"
          content="https://my-portfoglio.vercel.app/myPhoto.png"
        />
      </Head>
      <main className="w-full ">
        <HomePage />
      </main>
    </>
  );
}
