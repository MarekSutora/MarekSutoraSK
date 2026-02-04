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

  keywords: [
    "Marek Šútora",
    "Software Engineer",
    "Full Stack Developer",
    ".NET Developer",
    "Backend Developer",
    "Frontend Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],

  authors: [{ name: "Marek Šútora", url: siteUrl }],

  creator: "Marek Šútora",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "sk_SK",
    url: siteUrl,
    siteName: "Marek Šútora Portfolio",
    title: "Marek Šútora — Software Engineer | Portfolio",
    description:
      "Marek Šútora — software engineer. Portfolio, projects, experience, and contact information.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Marek Šútora — Software Engineer | Portfolio",
    description:
      "Marek Šútora — software engineer. Portfolio, projects, experience, and contact information.",
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
