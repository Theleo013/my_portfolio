import React from "react";
import { Element } from "react-scroll";
import SectionTitle from "@/components/SectionTitle";
import { useTranslation } from "react-i18next";
import SkillsCard from "../SkillsCard";

interface TSkills {
  icon: string;
  desc: string;
}
type TSkillsContent = Record<string, TSkills>;

const SkillSection: React.FC = () => {
  const SkillsContent: TSkillsContent = {
    html: {
      icon: "/assets/icons/skills-icons/html.svg",
      desc: "HTML5",
    },
    css3: {
      icon: "/assets/icons/skills-icons/css3.svg",
      desc: "CSS3",
    },
    js: {
      icon: "/assets/icons/skills-icons/js2.svg",
      desc: "JAVASCRIPT",
    },
    ts: {
      icon: "/assets/icons/skills-icons/ts.svg",
      desc: "TYPESCRIPT",
    },
    vite: {
      icon: "/assets/icons/skills-icons/vite.svg",
      desc: "VITE",
    },
    react: {
      icon: "/assets/icons/skills-icons/react.svg",
      desc: "REACT",
    },
    nextJS: {
      icon: "/assets/icons/skills-icons/nextjs.svg",
      desc: "NEXTJS",
    },
    redux: {
      icon: "/assets/icons/skills-icons/redux.svg",
      desc: "REDUX",
    },
    tailwind: {
      icon: "/assets/icons/skills-icons/tailwind.svg",
      desc: "TAILWIND",
    },
    materialUI: {
      icon: "/assets/icons/skills-icons/material-ui.svg",
      desc: "MATERIAL UI",
    },
    bootstrap: {
      icon: "/assets/icons/skills-icons/bootstrap.svg",
      desc: "BOOTSTRAP",
    },
    antdesign: {
      icon: "/assets/icons/skills-icons/Antdesign.svg",
      desc: "ANT DESIGN",
    },
    sass: {
      icon: "/assets/icons/skills-icons/sass.svg",
      desc: "SASS",
    },
    figma: {
      icon: "/assets/icons/skills-icons/figma.svg",
      desc: "FIGMA",
    },
    git: {
      icon: "/assets/icons/skills-icons/git.svg",
      desc: "GIT",
    },
    restAPI: {
      icon: "/assets/icons/skills-icons/restapi.svg",
      desc: "REST API",
    },
  };
  const { t } = useTranslation();
  return (
    <Element name="skills">
      <div className="flex flex-col items-center gap-10 ">
        <div className="py-10">
          <SectionTitle
            customStyle={{ border: "4px solid #000000" }}
            titleColor="text-[#000000]"
            title={t("skills_section.title")}
          />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-between w-full lg:px-28 gap-10">
          <div className="font-[Montserrat-Bold] text-3xl text-[#000000]">
            <h2>{t("skills_section.info")}:</h2>
          </div>
          <div className="flex flex-col items-center lg:flex-row justify-center gap-10 w-full">
            <div className="flex gap-10 ">
              <div className="flex flex-col items-center gap-10">
                <SkillsCard
                  icon={SkillsContent.html.icon}
                  desc={SkillsContent.html.desc}
                />
                <SkillsCard
                  icon={SkillsContent.vite.icon}
                  desc={SkillsContent.vite.desc}
                />
                <SkillsCard
                  icon={SkillsContent.tailwind.icon}
                  desc={SkillsContent.tailwind.desc}
                />
                <SkillsCard
                  icon={SkillsContent.sass.icon}
                  desc={SkillsContent.sass.desc}
                />
              </div>
              <div className="flex flex-col items-center gap-10 ">
                <SkillsCard
                  icon={SkillsContent.css3.icon}
                  desc={SkillsContent.css3.desc}
                />
                <SkillsCard
                  icon={SkillsContent.react.icon}
                  desc={SkillsContent.react.desc}
                />
                <SkillsCard
                  icon={SkillsContent.materialUI.icon}
                  desc={SkillsContent.materialUI.desc}
                />
                <SkillsCard
                  icon={SkillsContent.figma.icon}
                  desc={SkillsContent.figma.desc}
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col items-center gap-10 ">
                <SkillsCard
                  icon={SkillsContent.js.icon}
                  desc={SkillsContent.js.desc}
                />
                <SkillsCard
                  icon={SkillsContent.nextJS.icon}
                  desc={SkillsContent.nextJS.desc}
                />
                <SkillsCard
                  icon={SkillsContent.bootstrap.icon}
                  desc={SkillsContent.bootstrap.desc}
                />
                <SkillsCard
                  icon={SkillsContent.git.icon}
                  desc={SkillsContent.git.desc}
                />
              </div>
              <div className="flex flex-col items-center gap-10 ">
                <SkillsCard
                  icon={SkillsContent.ts.icon}
                  desc={SkillsContent.ts.desc}
                />
                <SkillsCard
                  icon={SkillsContent.redux.icon}
                  desc={SkillsContent.redux.desc}
                />
                <SkillsCard
                  icon={SkillsContent.antdesign.icon}
                  desc={SkillsContent.antdesign.desc}
                />
                <SkillsCard
                  icon={SkillsContent.restAPI.icon}
                  desc={SkillsContent.restAPI.desc}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillSection;
