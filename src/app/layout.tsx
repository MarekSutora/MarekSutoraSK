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
const siteUrl = "https://mareksutora.sk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Marek Šútora — Software Engineer | Portfolio",
    template: "%s — Marek Šútora",
  },

  description:
    "Marek Šútora — software engineer. Portfolio, projects, experience, and contact information.",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: { icon: "/ms.svg" },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Marek Šútora — Software Engineer | Portfolio",
    description:
      "Portfolio website of Marek Šútora — projects, experience, and contact.",
    siteName: "Marek Šútora",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Marek Šútora — Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marek Šútora — Software Engineer | Portfolio",
    description:
      "Portfolio website of Marek Šútora — projects, experience, and contact.",
    images: ["/og.png"],
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
