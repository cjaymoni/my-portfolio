import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const siteUrl = "https://my-portfolio-three-xi-67.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jude Clottey - Fullstack Web Developer",
    template: "%s | Jude Clottey",
  },
  description:
    "Jude Clottey is a Fullstack Web Developer with 5+ years of experience building scalable web applications using React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Jude Clottey",
    "Fullstack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Jude Clottey", url: siteUrl }],
  creator: "Jude Clottey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Jude Clottey",
    title: "Jude Clottey - Fullstack Web Developer",
    description:
      "Fullstack Web Developer with 5+ years of experience building scalable web applications.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jude Clottey - Fullstack Web Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jude Clottey - Fullstack Web Developer",
    description:
      "Fullstack Web Developer with 5+ years of experience building scalable web applications.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/images/jc-logo.png",
    apple: "/images/jc-logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jude Clottey",
  url: siteUrl,
  jobTitle: "Fullstack Web Developer",
  description:
    "Fullstack Web Developer with 5+ years of experience building scalable web applications.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
