import React from "react";
import Image from "next/image";

import Logo from "@/root/public/faculty_logo/FRI_V_S_eng_cb.svg";

const Education = () => {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-col gap-6 flex-grow p-[1px]">
        <div>
          <h2 className="text-xl font-semibold">University of Žilina</h2>
          <h3 className="text-lg font-medium">
            Faculty of Management Science and Informatics
          </h3>
          <p className="text-base">2018 - 2021</p>
          <p className="text-base">Bachelor&apos;s degree in Informatics</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">University of Žilina</h2>
          <h3 className="text-lg font-medium">
            Faculty of Management Science and Informatics
          </h3>
          <p className="text-base">2021 - 2023</p>
          <p className="text-base">
            Master&apos;s degree in Biomedical Informatics
          </p>
        </div>
      </div>
      <div className="flex-shrink: 1 md:block hidden">
        <Image src={Logo} alt="uniza" width={370} />
      </div>
    </div>
  );
};

export default Education;
