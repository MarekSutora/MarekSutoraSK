import About from "@/components/About/About";
import Links from "@/components/Links";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="w-full h-full z-20 dark:text-zinc-200 text-black relative">
      <ThemeSwitcher />
      {/* <FluidDistortion /> */}
      <div className="flex flex-col items-center h-full md:w-5/6 w-11/12 m-auto gap-10">
        <Title />
        <Links />
        <About />
      </div>
    </main>
  );
}
