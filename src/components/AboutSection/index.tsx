import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { useTranslation } from "react-i18next";
import ServiceCard from "@/components/ServiceCard";
import { Element } from "react-scroll";

interface TCardContent {
  design: {
    icon: string;
    title: string;
    par: string;
  };
  development: {
    icon: string;
    title: string;
    par: string;
  };
  maintenance: {
    icon: string;
    title: string;
    par: string;
  };
}

const About: React.FC = () => {
  const { t } = useTranslation();

  const CardContent: TCardContent = {
    design: {
      icon: "/assets/icons/about-icons/design.svg",
      title: t("about_section.design.title"),
      par: t("about_section.design.description"),
    },
    development: {
      icon: "/assets/icons/about-icons/development.svg",
      title: t("about_section.development.title"),
      par: t("about_section.development.description"),
    },
    maintenance: {
      icon: "/assets/icons/about-icons/maintenance.svg",
      title: t("about_section.maintenance.title"),
      par: t("about_section.maintenance.description"),
    },
  };
  return (
    <Element name="about">
      <div className=" flex flex-col items-center gap-8">
        <SectionTitle
          customStyle={{ border: "4px solid #000000" }}
          titleColor="text-[#000000]"
          title={t("about_section.about_title")}
        />
        <div className="font-[OpenSans-Regular] text-center">
          <p>{t("about_section.about_description")}</p>
        </div>
        <div className=" flex justify-center items-center font-[Montserrat-SemiBold] text-lg border-l-2 border-r-2 border-[#000000] w-[130px] h-[25px]">
          <span>{t("about_section.explore")}</span>
        </div>
        <div className="py-10">
          <img src="/assets/icons/separatorBlack.svg" alt="separatorBlack" />
        </div>
        <div className="flex flex-col items-center gap-15">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 lg:gap-40">
            <ServiceCard
              customStyle="absolute top-auto right-10"
              icon={CardContent.design.icon}
              title={CardContent.design.title}
              par={CardContent.design.par}
            />
            <ServiceCard
              customStyle="absolute top-auto right-27"
              icon={CardContent.development.icon}
              title={CardContent.development.title}
              par={CardContent.development.par}
            />
          </div>
          <div>
            <ServiceCard
              customStyle="absolute top-auto right-27"
              icon={CardContent.maintenance.icon}
              title={CardContent.maintenance.title}
              par={CardContent.maintenance.par}
            />
          </div>
          <div className="py-10">
            <img src="/assets/icons/separatorBlack.svg" alt="separatorBlack" />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
