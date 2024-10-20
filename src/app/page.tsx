import FluidDistortion from "@/components/Common/FluidDistortion";
import LanguageSwitcher from "@/components/Common/LanguageSwitcher";
import ThemeSwitcher from "@/components/Common/ThemeSwitcher";
import About from "@/components/Sections/About";
import Education from "@/components/Sections/Education/Education";
import Experience from "@/components/Sections/Experience";
import Projects from "@/components/Sections/Projects/Projects";
import SectionWrapper from "@/components/Sections/SectionWrapper";
import Title from "@/components/Sections/Title";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('About');


  return (
    <main className="z-[1] pb-5 text-black dark:text-zinc-300">
      <div className="fixed right-3 top-3 flex flex-row gap-2 z-50">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>

      <div className="m-auto flex w-11/12 flex-col items-center gap-14 pb-14 md:w-5/6">
        <Title />
        {/* <Links /> */}
      </div>
      <div className="m-auto flex w-11/12 flex-col items-center gap-6 md:w-5/6">
        <SectionWrapper title={t('title')}>
          <About />
        </SectionWrapper>
        <SectionWrapper title="Education">
          <Education />
        </SectionWrapper>
        <SectionWrapper title="Experience">
          <Experience />
        </SectionWrapper>
        <SectionWrapper title="Projects">
          <Projects />
        </SectionWrapper>
      </div>
      <FluidDistortion />
    </main>
  );
}
