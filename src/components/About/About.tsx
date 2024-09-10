import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-row justify-between">
        <Link
          href="https://www.linkedin.com/in/marek-%C5%A1%C3%BAtora-9867b4269/"
          className="flex flex-row items-center gap-1 z-50"
        >
          <FaLinkedin size={25} />
          <span className="text-lg font-semibold"> LinkedIn </span>
        </Link>
        |
        <a
          href="mailto:marek.sutora@gmail.com"
          className="flex flex-row items-center gap-1 z-50"
        >
          <IoIosMail size={25} />
          <span className="text-lg font-semibold">marek.sutora@gmail.com</span>
        </a>
        |
        <Link
          href="https://github.com/MarekSutora"
          className="flex flex-row items-center gap-1 z-50"
        >
          <FaGithub size={25} />
          <span className="text-lg font-semibold"> GitHub </span>
        </Link>
        |
        <a
          href="./CV_Sutora_Marek.pdf"
          className="flex flex-row items-center gap-1 z-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdDownload size={25} />
          <span className="text-lg font-semibold"> Resume </span>
        </a>
        |
        <a
          href="./projects-marek-sutora.pdf"
          className="flex flex-row items-center gap-1 z-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdDownload size={25} />
          <span className="text-lg font-semibold"> My projects </span>
        </a>
      </div>
    </section>
  );
};

export default About;
