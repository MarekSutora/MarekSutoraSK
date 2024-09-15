import React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Background from "@/components/Background";
import Providers from "./Providers";
import CustomCursor from "@/components/CustomCursor";

const inter = Manrope({ subsets: ["latin"] });
//Rubik, Anek_Devanagari, Manrope, Arimo
export const metadata: Metadata = {
  title: "Marek Šútora",
  icons: {
    icon: "/ms.svg",
  },
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
      className={cn(inter.className, "m-0 p-0 overflow-x-hidden w-full h-full")}
    >
      <body className="m-0 p-0 overflow-x-hidden w-full h-full">
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
