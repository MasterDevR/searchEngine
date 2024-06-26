import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../src/components/react-query-provider";
const inter = Inter({ subsets: ["latin"] });

// components
import NavBarWrapper from "@/src/components/display/nav-bar/nav-bar-wrapper";

export const metadata: Metadata = {
  title: "ShopEase",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBarWrapper />
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
