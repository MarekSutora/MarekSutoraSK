import LanguageSwitcher from "@/components/Common/LanguageSwitcher";
import ThemeSwitcher from "@/components/Common/ThemeSwitcher";
import About from "@/components/Sections/About";
import Education from "@/components/Sections/Education/Education";
import Experience from "@/components/Sections/Experience/Experience";
import Projects from "@/components/Sections/Projects/Projects";
import SectionWrapper from "@/components/Sections/SectionWrapper";
import Title from "@/components/Sections/Title";
import FluidWrapper from "@/components/Common/FluidWrapper";
import { useTranslations } from "next-intl";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marek Šútora",
  url: "https://www.mareksutora.sk",
  sameAs: [
    "https://www.linkedin.com/in/marek-%C5%A1%C3%BAtora-9867b4269/",
    "https://github.com/mareksutora",
  ],
  jobTitle: "Software Developer",
};

export default function Home() {
  const t = useTranslations("Page");

  return (
    <main className="z-[1] pb-5 text-black dark:text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="fixed right-3 top-3 z-50 flex flex-row gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>

      <div className="m-auto flex w-11/12 flex-col items-center gap-14 pb-14 md:w-5/6">
        <Title />
        {/* <Links /> */}
      </div>
      <div className="m-auto flex w-11/12 flex-col items-center gap-6 md:w-5/6">
        <SectionWrapper title={t("About")}>
          <About />
        </SectionWrapper>
        <SectionWrapper title={t("Education")}>
          <Education />
        </SectionWrapper>
        <SectionWrapper title={t("Experience")}>
          <Experience />
        </SectionWrapper>
        <SectionWrapper title={t("Projects")}>
          <Projects />
        </SectionWrapper>
      </div>
      <FluidWrapper />
    </main>
  );
}
