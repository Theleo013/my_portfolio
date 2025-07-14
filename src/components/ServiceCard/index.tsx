import React from "react";

interface serviceCardProps {
  customStyle: string;
  icon: string;
  title: string;
  par: string;
}

const ServiceCard: React.FC<serviceCardProps> = ({
  customStyle,
  icon,
  title,
  par,
}) => {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="relative flex items-center pl-3">
        <img className={customStyle} src={icon} alt="card-icon" />
        <h1 className="font-[Montserrat-Bold] ">{title}</h1>
      </div>
      <div>
        <p className="font-[OpenSans-Regular] text-xs w-[12rem] lg:w-[20rem]">
          {par}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
