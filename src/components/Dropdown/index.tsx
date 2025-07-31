import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Dropdown: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    sessionStorage.getItem("language") || i18n.language || "az"
  );

  useEffect(() => {
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, [selectedLanguage, i18n]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    sessionStorage.setItem("language", lang);
    window.location.reload();
  };

  return (

    <div className=" flex items-center w-[3rem] h-auto">
      <select
        id="language-dropdown"
        className=" bg-transparent text-white text-xl w-full lg:text-lg h-auto outline-none cursor-pointer hover:border-b-amber-400 "
        value={selectedLanguage}
        onChange={handleChange}
      >
        <option
          className="bg-black text-xs text-white hover:bg-amber-400 "
          value="az"
        >
          Az
        </option>
        <option
          className="bg-black text-xs text-white hover:bg-amber-400 "
          value="en"
        >
          En
        </option>
        <option
          className="bg-black text-xs text-white hover:bg-amber-400 "
          value="ru"
        >
          Ru
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
