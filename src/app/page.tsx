import FluidDistortion from "@/components/Common/FluidDistortion";
import ThemeSwitcher from "@/components/Common/ThemeSwitcher";
import About from "@/components/Sections/About";
import Education from "@/components/Sections/Education";
import Links from "@/components/Sections/Links";
import Projects from "@/components/Sections/Projects";
import SectionWrapper from "@/components/Sections/SectionWrapper";
import Title from "@/components/Sections/Title";

export default function Home() {
  return (
    <main className="w-full h-full z-[1] dark:text-zinc-200 text-black">
      <ThemeSwitcher />

      <div className="flex flex-col items-center md:w-5/6 w-11/12 m-auto gap-14 pb-14">
        <Title />
        <Links />
      </div>
      <div className="flex flex-col items-center md:w-5/6 w-11/12 m-auto gap-6">
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
