import type { Metadata } from "next";

import { montserrat } from "./../fonts";

import { Navigation } from "@/components/Navigation/Navigation";

import "./../globals.css";
import style from './layout.module.scss'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Navigation />
        <main className={`${style.mainGrid}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
