"use client";
import type { Metadata } from "next";
import { usePathname } from 'next/navigation';
import { Open_Sans, Nunito } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { Suspense } from "react";

const inter = Nunito({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  debugger
  const path = usePathname();
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        { path === '/login' ? null : <Sidebar />}
        <main className={path === '/login' ? `` : `mx-5 mt-16 sm:ml-[300px] sm:mt-3`}>{children}</main>
      </body>
    </html>
  );
}
