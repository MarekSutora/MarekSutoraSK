"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
