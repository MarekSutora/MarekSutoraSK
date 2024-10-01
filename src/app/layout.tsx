import React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Background from "@/components/Common/Background";
import Providers from "./Providers";
import CustomCursor from "@/components/Common/CustomCursor";
import FluidDistortion from "@/components/Common/FluidDistortion";
import { cn } from "@/lib/utils";

const manrope = Manrope({ subsets: ["latin"] });
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
      className={cn(
        manrope.className,
        "m-0 h-full w-full overflow-x-hidden p-0",
      )}
    >
      <body className="!m-0 !mr-0 !overflow-x-hidden p-0">
        <Providers>
          <CustomCursor />
          <Background />
          {children}
        </Providers>
      </body>
    </html>
  );
}
