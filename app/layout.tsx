import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silicon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://kit.fontawesome.com/41c8b474e2.css" crossOrigin="anonymous" />
        
      </head>
      <body>
      <div className="wrapper">
        <Header />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  );
}
