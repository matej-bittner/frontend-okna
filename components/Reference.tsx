"use client";
import { AllCompany, AllTitles } from "@/data";
import Image from "next/image";
import { useState } from "react";
import Titles from "./Titles";
const Reference = () => {
  const [isShowingAll, setIsShowingAll] = useState(false);
  return (
    <section
      id="Reference"
      className="flex flex-col items-center space-y-4 sm:space-y-6 xl:space-y-10 xl:px-2"
    >
      <Titles title={AllTitles[2].title} text={AllTitles[2].text} />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  min-h-fit w-full max-w-[80%] sm:max-w-[96%] md:max-w-[950px] xl:max-w-[1350px] mx-auto gap-4 sm:gap-2 xl:gap-4 place-items-center">
        {AllCompany.map((company, i) => {
          return (
            <a
              key={i}
              href={company.href}
              className={`aspect-[16/11] max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[450px]  relative ${
                i > 1 && !isShowingAll && "max-sm:hidden"
              }`}
            >
              <Image
                src={"/assets/" + company.img}
                width={565}
                height={376}
                alt=""
                className="object-cover"
              />
            </a>
          );
        })}
      </div>
      <button
        onClick={() => setIsShowingAll(!isShowingAll)}
        className="text-[#BABABA] sm:hidden"
      >
        {isShowingAll ? "Skrýt" : "Zobrazit další "}
      </button>
    </section>
  );
};

export default Reference;
