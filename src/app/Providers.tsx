"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
