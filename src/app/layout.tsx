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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={roboto.className}>
        {/* <div className="lg:hidden">
          <Header />
        </div> */}
        {children}
      </body>
    </html>
  );
}
