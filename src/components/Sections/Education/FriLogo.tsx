"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoBen from "@/root/public/faculty_logo/FRI_V_S_eng_cb.svg";
import LogoWen from "@/root/public/faculty_logo/FRI_V_T_eng_biela.svg";
import LogoBsk from "@/root/public/faculty_logo/FRI_V_S_sk_cb.svg";
import LogoWsk from "@/root/public/faculty_logo/FRI_V_T_sk_biela.svg";
import LogoCen from "@/root/public/faculty_logo/FRI_V_S_eng_f.svg";
import LogoCsk from "@/root/public/faculty_logo/FRI_V_S_sk_f.svg";
import { useLocale } from "next-intl";

type Props = {};

const FriLogo = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const locale = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (locale === "sk") {
    if (theme === "dark") {
      return <Image src={LogoCsk} alt="uniza" width={370} priority />;
    }
    return <Image src={LogoCsk} alt="uniza" width={370} priority />;
  } else {
    if (theme === "dark") {
      return <Image src={LogoCen} alt="uniza" width={370} priority />;
    }
    return <Image src={LogoCen} alt="uniza" width={370} priority />;
  }

  // if (theme === "dark") {
  //   return <Image src={LogoBen} alt="uniza" width={370} priority/>;
  // }

  // return <Image src={LogoWen} alt="uniza" width={370} priority/>;
};

export default FriLogo;
