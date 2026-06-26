import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ThemeToggle from "./components/ThemeToggle";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dimitrikokhtashvili.com"),
  title: "Dimitri Kokhtashvili - Web Developer Portfolio",
  description:
    "I'm Dimitri Kokhtashvili, a passionate web developer. Explore my portfolio showcasing my projects in Next.js, React, and modern web technologies.",
  authors: [
    {
      name: "Dimitri Kokhtashvili",
      url: "https://www.dimitrikokhtashvili.com",
    },
  ],
  keywords: [
    "Dimitri Kokhtashvili",
    "web developer",
    "portfolio",
    "Next.js",
    "React",
    "Frontend",
    "Full-stack",
    "JavaScript",
    "Tailwind CSS",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.dimitrikokhtashvili.com",
  },
  openGraph: {
    title: "Dimitri Kokhtashvili - Web Developer Portfolio",
    description:
      "Explore my portfolio showcasing my web development projects and skills in React, Next.js, and modern web technologies.",
    url: "https://www.dimitrikokhtashvili.com",
    siteName: "Dimitri Kokhtashvili",
    images: [
      {
        url: "/myPhoto.png",
        width: 1200,
        height: 630,
        alt: "Dimitri Kokhtashvili - Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimitri Kokhtashvili - Web Developer Portfolio",
    description:
      "Explore my portfolio showcasing my web development projects and skills in React, Next.js, and modern web technologies.",
    images: ["/myPhoto.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  formatDetection: { telephone: true },
  other: { copyright: "© 2025 Dimitri Kokhtashvili" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dimitri Kokhtashvili",
  url: "https://www.dimitrikokhtashvili.com",
  sameAs: [
    "https://github.com/dlkokhta",
    "https://www.linkedin.com/in/dimitri-kokhtashvili-6a816a297/",
  ],
  jobTitle: "Web Developer",
  description:
    "I'm a passionate web developer specializing in Next.js, React, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          {children}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
