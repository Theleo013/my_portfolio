import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import BurgerMenu from "../BurgerMenu";
import Dropdown from "../Dropdown";

interface NavLinkItem {
  id: string;
  label: string;
}

const Header: React.FC = () => {
  const { t } = useTranslation();

  const navLinks: NavLinkItem[] = [
    { id: "about", label: t("hero_section.hero-nav.about") },
    { id: "skills", label: t("hero_section.hero-nav.skills") },
    { id: "portfolio", label: t("hero_section.hero-nav.portfolio") },
  ];

  return (
    <nav className="flex justify-between items-center w-[100%] absolute top-0 left-0 py-3 px-6 lg:px-14 z-50">
      <div>
        <a href="/">
          <img
            className="hidden lg:block w-16 h-16  "
            src="/assets/main-logo.png"
            alt="main-logo"
          />
        </a>
        <a href="/">
          <img
            className="block lg:hidden w-16 h-16 "
            src="/assets/main-logo2.png"
            alt="main-logo"
          />
        </a>
      </div>
      <ul className="flex items-center gap-9 font-[Montserrat-Bold]  ">
        {navLinks?.map((link) => (
          <li className="hidden lg:flex" key={link.id}>
            <Link
              to={link.id}
              smooth={true}
              offset={-80}
              duration={500}
              spy={true}
              activeClass="underline"
              className=" text-amber-50 cursor-pointer hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <div
          onClick={() => window.open("https://wa.me/994516422532", "_blank")}
          className=" hidden lg:flex justify-center items-center text-[0.8rem] text-black bg-amber-50 w-28 h-6 rounded-md cursor-pointer"
        >
          {t("hero_section.hero-nav.contact")}
        </div>
        <div className="flex items-center">
          <BurgerMenu />
          <div className="hidden lg:block"><Dropdown /></div> 
        </div>
      </ul>
    </nav>
  );
};

export default Header;
