import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";

const Links = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between font-semibold w-full select-none gap-3 md:gap-0">
      <Link
        href="https://www.linkedin.com/in/marek-%C5%A1%C3%BAtora-9867b4269/"
        className="flex flex-row items-center gap-1 z-50"
      >
        <FaLinkedin size={25} />
        <span className="text-lg"> LinkedIn </span>
      </Link>
      <span className="rotate-90 md:rotate-0 md:block hidden"> | </span>
      <a
        href="mailto:marek.sutora@gmail.com"
        className="flex flex-row items-center gap-1 z-50"
      >
        <IoIosMail size={25} />
        <span className="text-lg"> marek.sutora@gmail.com </span>
      </a>
      <span className="rotate-90 md:rotate-0 md:block hidden"> | </span>
      <Link
        href="https://github.com/MarekSutora"
        className="flex flex-row items-center gap-1 z-50"
      >
        <FaGithub size={25} />
        <span className="text-lg"> GitHub </span>
      </Link>
      <span className="rotate-90 md:rotate-0 md:block hidden"> | </span>
      <a
        href="./CV_Sutora_Marek.pdf"
        className="flex flex-row items-center gap-1 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoMdDownload size={25} />
        <span className="text-lg"> CV </span>
      </a>
      <span className="rotate-90 md:rotate-0 md:block hidden"> | </span>
      <a
        href="./projects-marek-sutora.pdf"
        className="flex flex-row items-center gap-1 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoMdDownload size={25} />
        <span className="text-lg"> My projects </span>
      </a>
    </div>
  );
};

export default Links;
