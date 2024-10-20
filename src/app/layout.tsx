import React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Background from "@/components/Common/Background";
import Providers from "./Providers";
import CustomCursor from "@/components/Common/CustomCursor";
import { cn } from "@/lib/utils";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const manrope = Manrope({ subsets: ["latin"] });
//Rubik, Anek_Devanagari, Manrope, Arimo
export const metadata: Metadata = {
  title: "Marek Šútora",
  icons: {
    icon: "/ms.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      className={cn(
        manrope.className,
        "m-0 h-full w-full overflow-x-hidden p-0",
      )}
    >
      <body className="!m-0 !mr-0 !overflow-x-hidden p-0">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <CustomCursor />
            <Background />
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
