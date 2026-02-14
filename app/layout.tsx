import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login-ui Library",
  description: "A curated collection of modern, beautiful, production-ready login and signup pages.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} tracking-wide scroll-smooth antialiased`}
      >
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
