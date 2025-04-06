import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Head from "next/head";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});



// export const metadata: Metadata = {
//   title: "Dimitri Kokhtashvili | Full-Stack Developer | React, Next.js, Express.js Expert",
//   description: "Full-Stack Developer skilled in React, Next.js, and MongoDB, creating responsive web apps.",
//   robots: "index, follow",
//   keywords: "Full-Stack Developer, React, Next.js, MongoDB, Express.js, Web Development",
//   openGraph: {
//     title: "Dimitri Kokhtashvili | Full-Stack Developer",
//     type: "website",
//     images: ["https://www.dimitrikokhtashvili.dev/myPhoto.png"],
//     url: "https://www.dimitrikokhtashvili.com",
//     description: "Skilled developer in React, Node.js, MongoDB. Creating scalable, responsive web applications.",
//     locale:"en_US",
//     siteName:"Dimitri Kokhtashvili",
   
    
//   },

//   viewport: "width=device-width, initial-scale=1.0",
//     authors: [{ name: "Dimitri Kokhtashvili", url: "https://www.dimitrikokhtashvili.com" }],
//   // twitter: {
//   //   card: "summary_large_image",
//   //   title: "Dimitri Kokhtashvili - Portfolio",
//   //   description: "Explore Dimitri's full-stack development projects and skills.",
//   //   image: "https://www.dimitrikokhtashvili.dev/myPhoto.png",
//   // },
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head>
        <meta charSet="UTF-8" />
        <meta name="language" content="English" />
        <meta name="title" content="Dimitri Kokhtashvili - Web Developer Portfolio" />
        <meta name="copyright" content="© 2025 Dimitri Kokhtashvili" />
        <meta name="language" content="English" />
        {/* Essential Meta Tags */}
        <title>Dimitri Kokhtashvili - Web Developer Portfolio</title>
        <meta name="author" content="Dimitri Kokhtashvili" />
        <meta name="description" content="I'm Dimitri Kokhtashvili, a passionate web developer. Explore my portfolio showcasing my projects in Next.js, React, and modern web technologies." />
        <meta name="keywords" content="Dimitri Kokhtashvili, web developer, portfolio, Next.js, React, Frontend, Full-stack, JavaScript, Tailwind CSS" />
        <meta name="robots" content="index, follow" />

        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Dimitri Kokhtashvili - Web Developer Portfolio" />
        <meta property="og:description" content="Explore my portfolio showcasing my web development projects and skills in React, Next.js, and modern web technologies." />
        <meta property="og:image" content="https://www.dimitrikokhtashvili.dev/myPhoto.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dimitrikokhtashvili.dev" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:site_name" content="Dimitri Kokhtashvili" />

        {/* Twitter Card (for better link previews on Twitter/X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dimitri Kokhtashvili - Web Developer Portfolio" />
        <meta name="twitter:description" content="Explore my portfolio showcasing my web development projects and skills in React, Next.js, and modern web technologies." />
        <meta name="twitter:image" content="https://www.dimitrikokhtashvili.dev/myPhoto.png" />
        {/* <meta name="twitter:creator" content="@yourTwitterHandle" /> */}

        {/* Canonical URL to Avoid Duplicate Content Issues */}
        <link rel="canonical" href="https://www.dimitrikokhtashvili.dev" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data for Google (SEO Boost) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dimitri Kokhtashvili",
            "url": "https://www.dimitrikokhtashvili.dev",
            "sameAs": [
              "https://github.com/dlkokhta",
              "https://www.linkedin.com/in/dimitri-kokhtashvili-6a816a297/"
            ],
            "jobTitle": "Web Developer",
            "description": "I'm a passionate web developer specializing in Next.js, React, and modern web technologies."
          })}
        </script>
      </head>
      <body className={roboto.className}>
        {/* <div className="lg:hidden">
          <Header />
        </div> */}
        {children}
      </body>
    </html>
  );
}
