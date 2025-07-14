import React from "react";
import { useTranslation } from "react-i18next";

const FrontendSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-around lg:flex-row lg:justify-between items-center py-10 px-5 lg:px-16 bg-[#1d1d1d] w-full h-auto  ">
      <div className="flex flex-col items-center lg:items-start text-white gap-5 order-2 lg:order-1 ">
        <h1 className="font-[Montserrat-Bold] text-3xl">
          {t("hero_section.frontend_title")}
        </h1>
        <p className="font-[OpenSans-Regular] text-lg lg:w-[45rem]">
          {t("hero_section.frontend_desc")}
        </p>
      </div>
      <div className="order-1 lg:order-2">
        <img
          className="rounded-[10%] w-[240px] h-[180px]"
          src="/assets/images/developer.gif"
          alt="dev-gif"
        />
      </div>
    </div>
  );
};

export default FrontendSection;
