import FluidDistortion from "@/components/Common/FluidDistortion";
import ThemeSwitcher from "@/components/Common/ThemeSwitcher";
import About from "@/components/Sections/About";
import Education from "@/components/Sections/Education/Education";
import Links from "@/components/Sections/Links";
import Projects from "@/components/Sections/Projects/Projects";
import SectionWrapper from "@/components/Sections/SectionWrapper";
import Title from "@/components/Sections/Title";

export default function Home() {
  return (
    <main className="z-[1] h-full w-full text-black dark:text-zinc-300 pb-5">
      <ThemeSwitcher />

      <div className="m-auto flex w-11/12 flex-col items-center gap-14 pb-14 md:w-5/6">
        <Title />
        {/* <Links /> */}
      </div>
      <div className="m-auto flex w-11/12 flex-col items-center gap-6 md:w-5/6">
        <SectionWrapper title="About">
          <About />
        </SectionWrapper>
        <SectionWrapper title="Education">
          <Education />
        </SectionWrapper>
        <SectionWrapper title="Projects">
          <Projects />
        </SectionWrapper>
      </div>
      <FluidDistortion />
    </main>
  );
}
