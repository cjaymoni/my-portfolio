import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Jude Clottey - Fullstack Web Developer",
  description: "Personal portfolio of Jude Clottey, a Fullstack Web Developer specializing in modern web applications.",
  icons: {
    icon: "/images/jc-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
