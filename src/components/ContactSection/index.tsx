import React from "react";
import SectionTitle from "../SectionTitle";
import { useTranslation } from "react-i18next";
import ContactForm from "../ContactForm";

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[radial-gradient(ellipse_50%_80%,_rgba(255,255,255,0.4)_0%,_#d7d7d7_100%)] px-3 lg:px-8 py-20">
      <div className=" flex flex-col items-center text-center justify-center gap-8">
        <SectionTitle
          customStyle={{ border: "4px solid #000000" }}
          titleColor="text-[#000000]"
          title={t("contact_section.title")}
        />
        <div className="flex flex-col items-center gap-6">
          <p className="font-[OpenSans-Regular] text-[#000000]">
            {t("contact_section.description")}
          </p>
          <img src="/assets/icons/separatorBlack.svg" alt="separatorBlack" />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
