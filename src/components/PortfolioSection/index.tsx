import React, { useState } from "react";
import { Element } from "react-scroll";
import SectionTitle from "../SectionTitle";
import { useTranslation } from "react-i18next";

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const projectTitle: string[] = [
    "MasterRenavation",
    "MemoryGame",
    "TrendyVerse",
  ];

  const [activeTab, setActiveTab] = useState<"left" | "right">("left");

  const getTabClass = (type: "left" | "right") => {
    const isActive = activeTab === type;

    return [
      "relative",
      "px-4",
      "pb-2",
      "cursor-pointer",
      isActive ? "text-white" : "text-gray-400",
      "after:content-['']",
      "after:absolute",
      "after:bottom-0",
      "after:left-0",
      "after:h-[2px]",
      "after:w-full",
      "after:bg-gradient-to-r",
      isActive
        ? type === "left"
          ? "after:from-white after:to-gray-500"
          : "after:from-gray-500 after:to-white"
        : "after:from-gray-500 after:to-gray-500",
    ].join(" ");
  };

  return (
    <Element name="portfolio">
      <>
        <div className="bg-[#000000] flex relative flex-col justify-end items-center w-full h-[82rem] lg:h-[50rem] lg:px-[100px]">
          <div className="relative w-[320px]">
  <img
    className="w-full h-auto"
    src="/assets/images/wordcloud.png"
    alt="wordcloud"
  />
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <SectionTitle 
      title={t("portfolio_section.title")}
      titleColor="text-white"
      customStyle={{ border: "4px solid #ffffff" }}
    />
  </div>
</div>

          <div className="flex flex-col items-center p-8 gap-8 w-full">

            <ul className="flex items-center text-[#7c7c7c] font-[Montserrat-SemiBold]">
              <li
                data-type="left"
                className={getTabClass("left")}
                onClick={() => setActiveTab("left")}
              >
                {t("portfolio_section.projects")}
              </li>

              <li
                data-type="right"
                className={getTabClass("right")}
                onClick={() => setActiveTab("right")}
              >
                {t("portfolio_section.code")}
              </li>
            </ul>
            {activeTab === "left" && (
              <div
                className="
        flex flex-col lg:flex-row justify-between gap-2 items-center lg:items-start w-full"
              >
                <div className="flex flex-col items-center gap-2 lg:gap-5">
                  <img
                    className="w-[240px] lg:w-[300px] h-[300px] lg:h-[360px] object-cover"
                    src="/assets/images/MasterRenovation.png"
                    alt="master-renovation"
                  />
                  <span className="font-[Montserrat-Bold] text-lg lg:text-md text-[#ffffff] ">
                    {projectTitle[0]}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 lg:gap-5">
                  <img
                    className="w-[240px] lg:w-[300px] h-[300px] lg:h-[360px] object-cover"
                    src="/assets/images/MemoryGame.png"
                    alt="memory-game"
                  />
                  <span className="font-[Montserrat-Bold] text-lg lg:text-md text-[#ffffff] ">
                    {projectTitle[1]}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 lg:gap-5">
                  <img
                    className="w-[240px] lg:w-[300px] h-[300px] lg:h-[360px] object-cover"
                    src="/assets/images/TrendyVerse.png"
                    alt="trendy-verse"
                  />
                  <span className="font-[Montserrat-Bold] text-lg lg:text-md text-[#ffffff] ">
                    {projectTitle[2]}
                  </span>
                </div>
              </div>
            )}
            {activeTab === "right" && (
              <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start cursor-pointer w-full">
                <div
                  className="flex flex-col items-center gap-2 lg:gap-5"
                  onClick={() =>
                    window.open(
                      "https://github.com/Theleo013/MasterRenovation",
                      "_black"
                    )
                  }
                >
                  <img
                    className="w-[240px] lg:w-[300px] h-[300px] lg:h-[360px] object-contain"
                    src="/assets/images/code1.png"
                    alt="code1"
                  />
                  <span className="font-[Montserrat-Bold] text-lg lg:text-md text-[#ffffff] ">
                    {projectTitle[0]}
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2 lg:gap-5"
                  onClick={() =>
                    window.open(
                      "https://github.com/Theleo013/Memory-Cards-Game",
                      "_black"
                    )
                  }
                >
                  <img
                    className="w-[240px] lg:w-[300px] h-[300px] lg:h-[360px] object-contain"
                    src="/assets/images/code2.png"
                    alt="code2"
                  />
                  <span className="font-[Montserrat-Bold] text-lg lg:text-md text-[#ffffff]">
                    {projectTitle[1]}
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2 lg:gap-5"
                  onClick={() =>
                    window.open(
                      "https://github.com/Theleo013/TrendyVerse",
                      "_black"
                    )
                  }
                >
                  <img
                    className="w-[240px] lg:w-[300px] h-[300px] lg:h-[360px] object-contain"
                    src="/assets/images/code3.png"
                    alt="code3"
                  />
                  <span className="font-[Montserrat-Bold] text-lg lg:text-md text-[#ffffff]">
                    {projectTitle[2]}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center bg-neutral-900 w-full">
          <span className="font-[Montserrat-SemiBold] text-[#ffffff] ">
            {t("portfolio_section.desc")}
          </span>
        </div>
      </>
    </Element>
  );
};

export default Portfolio;
