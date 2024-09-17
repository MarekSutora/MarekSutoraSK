import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const SectionWrapper = ({ children, title }: Props) => {
  return (
    <section className="md:w-[50rem] w-full h-full gap-3 flex flex-col">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {children}
    </section>
  );
};

export default SectionWrapper;
