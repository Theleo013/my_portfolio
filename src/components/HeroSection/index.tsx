import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col relative w-[100%] h-[700px] overflow-hidden lg:flex">
      <div className="bg-[#5d6268] lg:bg-[#d7d7d7] opacity-80 [clip-path:polygon(0%_25%,_100%_0%,_100%_100%,_0%_100%)] lg:[clip-path:polygon(0%_0%,_100%_0%,_70%_100%,_0%_100%)] w-[100%] h-[35%] order-2 lg:w-[100%] lg:h-[100%] absolute bottom-0 lg:top-0 left-0 z-10  ">
        <div className="flex flex-col items-start justify-center gap-2.5 lg:gap-5 absolute top-25 lg:top-48 lg:left-20 left-5">
          <span className="font-[Raleway-Bold] text-3xl lg:text-4xl text-[#fff] lg:text-black">
            {t("hero_section.hero_title.span")}
          </span>
          <h1 className="font-[Raleway-Bold] text-3xl lg:text-5xl text-[#fff] lg:text-black">
            {t("hero_section.hero_title.main")}
          </h1>
          <p className="font-[Raleway-ExtraBold] text-xl lg:text-2xl text-[#fff] lg:text-[#424142]">
            {t("hero_section.hero_title.desc")}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-2.5 lg:gap-4.5 absolute bottom-6 lg:bottom-30 right-4 lg:left-20">
          <div
            className="flex justify-center items-center lg:rounded-xs lg:shadow-lg shadow-black w-8 h-8 lg:bg-[#C4C4C4] cursor-pointer"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=elcinelcin57@gmail.com",
                "_blank"
              )
            }
          >
            <img
              className="hidden lg:block w-5 h-5"
              src="/assets/icons/hero-icons/gmail.svg"
              alt="gmail-icon"
            />
            <img
              className="block lg:hidden w-5 h-5"
              src="/assets/icons/hero-icons/gmail-white.svg"
              alt="gmail-icon"
            />
          </div>
          <div
            className="flex justify-center items-center lg:rounded-xs lg:shadow-lg shadow-black w-8 h-8 lg:bg-[#C4C4C4] cursor-pointer"
            onClick={() =>
              window.open("https://github.com/Theleo013", "_blank")
            }
          >
            <img
              className="hidden lg:block w-5 h-5"
              src="/assets/icons/hero-icons/git-main.svg"
              alt="git-icon"
            />
            <img
              className="block lg:hidden w-5 h-5"
              src="/assets/icons/hero-icons/git-white.svg"
              alt="git-icon"
            />
          </div>
          <div
            className="flex justify-center items-center lg:rounded-xs lg:shadow-lg shadow-black w-8 h-8 lg:bg-[#C4C4C4] cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/elchin-mammadov-915188305/",
                "_blank"
              )
            }
          >
            <img
              className="hidden lg:block w-5 h-5"
              src="/assets/icons/hero-icons/in-main.svg"
              alt="in-icon"
            />
            <img
              className="block lg:hidden w-5 h-5"
              src="/assets/icons/hero-icons/in-white.svg"
              alt="in-icon"
            />
          </div>
        </div>
      </div>
      <div
        className=" bg-black [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] 
lg:[clip-path:polygon(50%_0%,_100%_0%,_100%_100%,_40%_100%)] w-[100%] h-[100%] order-1 lg:w-[100%] lg:h-[100%] absolute top-0 left-0 z-0 lg:z-10 "
      >
        <img
          className="w-[623px] h-[710px] overflow-hidden absolute top-20 left-[30%] lg:bottom-0 lg:left-[55%] lg:w-[465px] lg:h-[620px] object-cover"
          src="/assets/images/image_hero.png"
          alt="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
