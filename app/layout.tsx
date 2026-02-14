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
        <div className="fixed inset-0 pointer-events-none bg-[image:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[image:radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-52">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
