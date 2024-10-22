import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <div className="flex flex-col gap-3 p-[1px]">
      <div className="flex flex-row flex-wrap gap-2">
        <Link
          href="https://www.linkedin.com/in/marek-%C5%A1%C3%BAtora-9867b4269/"
          className="z-50 flex flex-row items-center gap-1 rounded-2xl border-[1px] border-zinc-300 bg-zinc-200 px-2 py-1 shadow-md transition-all duration-300 hover:bg-zinc-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800"
        >
          <FaLinkedin size={24} /> <span> LinkedIn </span>
        </Link>
        <a
          href="mailto:marek.sutora@gmail.com"
          className="z-50 flex flex-row items-center gap-1 rounded-2xl border-[1px] border-zinc-300 bg-zinc-200 px-2 py-1 shadow-md transition-all duration-300 hover:bg-zinc-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800"
        >
          <IoIosMail size={24} /> <span>marek.sutora@gmail.com</span>
        </a>

        <Link
          href="https://github.com/MarekSutora"
          className="z-50 flex flex-row items-center gap-1 rounded-2xl border-[1px] border-zinc-300 bg-zinc-200 px-2 py-1 shadow-md transition-all duration-300 hover:bg-zinc-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800"
        >
          <FaGithub size={24} /> <span>GitHub</span>
        </Link>

        <a
          href="./CV_Sutora_Marek.pdf"
          className="z-50 flex flex-row items-center gap-1 rounded-2xl border-[1px] border-zinc-300 bg-zinc-200 px-2 py-1 shadow-md transition-all duration-300 hover:bg-zinc-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdDownload size={24} /> <span>CV</span>
        </a>

        <a
          href="./projects-marek-sutora.pdf"
          className="z-50 flex flex-row items-center gap-1 rounded-2xl border-[1px] border-zinc-300 bg-zinc-200 px-2 py-1 shadow-md transition-all duration-300 hover:bg-zinc-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800"
          rel="noopener noreferrer"
        >
          <IoMdDownload size={24} /> <span>{t("my-projects")}</span>
        </a>
      </div>
      <p className="text-lg">{t("content-1")}</p>
      <p className="text-lg">{t("content-2")}</p>
      <p className="text-lg">{t("content-3")}</p>
    </div>
  );
};

export default About;
