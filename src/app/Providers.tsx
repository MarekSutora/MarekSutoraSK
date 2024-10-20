import { ThemeProvider } from "next-themes";
import { getMessages } from "next-intl/server";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const messages = getMessages();

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
