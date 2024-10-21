"use client";

import React from "react";
import Image from "next/image";
import SlovakiaFlag from "@/root/public/flags/svk.svg";
import UKFlag from "@/root/public/flags/uk2.svg";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import {useTransition} from 'react';
import setLanguage from "@/lib/actions/setLanguageAction";

type Props = {};

const LanguageSwitcher = (props: Props) => {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = async () => {
    const newLocale = locale === "sk" ? "en" : "sk";
    startTransition(() => {
      setLanguage(newLocale);
    });
  };

  return (
    <button className="h-8 w-8 cursor-pointer" onClick={switchLocale}>
      <Image
        src={locale === "sk" ? UKFlag : SlovakiaFlag}
        alt="Language Icon"
      />
    </button>
  );
};

export default LanguageSwitcher;
