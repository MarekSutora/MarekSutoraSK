import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Background from "@/components/Background";
import Providers from "./Providers";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {ssr: false});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marek Šútora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="m-0 p-0 overflow-x-hidden w-full h-full"
    >
      <body className={cn(inter, "m-0 p-0 overflow-x-hidden w-full h-full")}>
        <Providers>
          <CustomCursor />
          <div className="w-full h-full">
            <Background />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
