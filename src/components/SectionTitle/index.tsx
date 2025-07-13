import React from "react";

interface SectionTitleProps {
  title: string;
  customStyle?: React.CSSProperties;
  titleColor?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  customStyle,
  titleColor,
  title,
}) => {
  return (
    <div
      style={customStyle}
      className="flex items-center justify-center w-[12rem] lg:w-[15rem] h-[3rem] lg:h-[4rem] font-[Montserrat-Bold] text-md lg:text-xl "
    >
      <h1 className={titleColor}>{title}</h1>
    </div>
  );
};

export default SectionTitle;
