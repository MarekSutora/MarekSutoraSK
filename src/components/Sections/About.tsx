import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 p-[1px]">
      <div className="flex flex-row gap-2">
        <Link
          href="https://www.linkedin.com/in/marek-%C5%A1%C3%BAtora-9867b4269/"
          className="z-50 flex flex-row items-center gap-1 rounded-2xl border-[1px] border-gray-400 bg-gray-300 dark:border-neutral-800 dark:bg-neutral-900 px-2 py-1 dark:text-gray-300 shadow-lg transition-all duration-300 dark:hover:bg-neutral-800"
        >
          <FaLinkedin size={24} /> <span className="text-"> LinkedIn </span>
        </Link>
        <a
          href="mailto:marek.sutora@gmail.com"
          className="z-50 flex flex-row items-center gap-1 rounded-2xl border-[1px] border-neutral-800 bg-neutral-900 px-2 py-1 text-gray-300 shadow-lg transition-all duration-300 hover:bg-neutral-800"
        >
          <IoIosMail size={24} /> <span>marek.sutora@gmail.com</span>
        </a>

        <Link
          href="https://github.com/MarekSutora"
          className="z-50 flex flex-row items-center gap-1 rounded-2xl border-[1px] border-neutral-800 bg-neutral-900 px-2 py-1 text-gray-300 shadow-lg transition-all duration-300 hover:bg-neutral-800"
        >
          <FaGithub size={24} /> <span>GitHub</span>
        </Link>

        <a
          href="./CV_Sutora_Marek.pdf"
          className="z-50 flex flex-row items-center gap-1 rounded-2xl border-[1px] border-neutral-800 bg-neutral-900 px-2 py-1 text-gray-300 shadow-lg transition-all duration-300 hover:bg-neutral-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdDownload size={24} /> <span>CV</span>
        </a>

        <a
          href="./projects-marek-sutora.pdf"
          className="z-50 flex flex-row items-center gap-1 rounded-2xl border-[1px] border-neutral-800 bg-neutral-900 px-2 py-1 text-gray-300 shadow-lg transition-all duration-300 hover:bg-neutral-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdDownload size={24} /> <span>My Projects</span>
        </a>
      </div>
      <p className="text-lg">
        I am a graduate of the Faculty of Management and Informatics with
        experience in front-end and back-end web application development and
        working with databases. In each of these areas, I have worked with
        various technologies and tools. I also have experience with team
        collaboration and agile software development.
      </p>
      <p className="text-lg">
        I consider myself a reliable and hardworking person who has no problem
        learning different new and interesting technologies and tools. In my
        free time, I enjoy exercising, listening to music, watching series,
        movies, and various sports.
      </p>
      <p className="text-lg">
        I also like reading non-fiction literature and occasionally playing
        computer games.
      </p>
    </div>
  );
};

export default About;
