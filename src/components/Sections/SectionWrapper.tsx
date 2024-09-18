import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const SectionWrapper = ({ children, title }: Props) => {
  return (
    <section className="flex h-full w-full flex-col gap-3 md:w-[50rem]">
      <div className="flex flex-row">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="my-auto ml-3 h-[2px] w-full bg-zinc-300 rounded-full"></div>
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
