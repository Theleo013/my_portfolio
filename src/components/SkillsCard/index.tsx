import React from "react";

interface TSkillsProps {
  icon: string;
  desc: string;
}

const SkillsCard: React.FC<TSkillsProps> = ({ icon, desc }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <img
        className="w-10 lg:w-14 h-11 lg:h-14 object-contain block"
        src={icon}
        alt="HTML5"
      />
      <span className="text-xs font-[Montserrat-Regular]">{desc}</span>
    </div>
  );
};

export default SkillsCard;
