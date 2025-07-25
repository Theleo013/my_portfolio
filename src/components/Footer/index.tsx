import React from "react";
import { useTranslation } from "react-i18next";
import ScrollToUpButton from "../ScrollToTop/BackToTopButton";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#1a1a1a] flex flex-col items-center text-center justify-center gap-5 w-full h-[200px]">
      <div>
        <ScrollToUpButton />
      </div>
      <div
        className="flex items-center gap-5
      "
      >
        <img
          className="w-[30px] h-[28px] cursor-pointer"
          onClick={() =>
            window.open("https://www.facebook.com/elchin.memmedov1", "_blank")
          }
          src="/assets/icons/footer-icons/fb.svg"
          alt="fb-icon"
        />
        <img
          className="w-[30px] h-[28px] cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/elchin-mammadov-915188305/",
              "_blank"
            )
          }
          src="/assets/icons/footer-icons/in.svg"
          alt="in-icon"
        />
        <img
          className="w-[30px] h-[28px] cursor-pointer"
          onClick={() =>
            window.open("https://www.instagram.com/mamedow013/", "_blank")
          }
          src="/assets/icons/footer-icons/insta.svg"
          alt="insta-icon"
        />
        <img
          className="w-[30px] h-[28px] cursor-pointer"
          onClick={() => window.open("https://wa.me/994516422532", "_blank")}
          src="/assets/icons/footer-icons/wp.svg"
          alt="wp-icon"
        />
      </div>
      <div>
        <span className="text-[#ffffff]">{t("copyright")}</span>
      </div>
    </div>
  );
};

export default Footer;
