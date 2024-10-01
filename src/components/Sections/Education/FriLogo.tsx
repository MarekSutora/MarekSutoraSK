"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoB from "@/root/public/faculty_logo/FRI_V_S_eng_cb.svg";
import LogoW from "@/root/public/faculty_logo/FRI_V_T_eng_biela.svg";

type Props = {};

const FriLogo = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (theme === "dark") {
    return <Image src={LogoW} alt="uniza" width={370} priority/>;
  }

  return <Image src={LogoB} alt="uniza" width={370} priority/>;
};

export default FriLogo;
