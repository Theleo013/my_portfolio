import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
<<<<<<< HEAD
=======
import Dropdown from "../Dropdown";
>>>>>>> c8553c8 (fix all problems)

interface NavLinkItem {
  id: string;
  label: string;
}

const Burger: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => (
  <button
    onClick={() => setOpen(!open)}
    className="flex flex-col justify-around w-8 h-8 bg-transparent border-0 p-0 z-20 focus:outline-none"
    aria-label="Toggle menu"
    aria-expanded={open}
  >
    <span
      className={`block w-8 h-1 rounded-lg transform transition-all duration-300 ${
        open ? "rotate-45 bg-gray-50" : "bg-gray-50"
      }`}
      style={{ transformOrigin: "1px" }}
    />
    <span
      className={`block w-8 h-1 rounded-lg transform transition-all duration-300 ${
        open ? "opacity-0 translate-x-5 bg-gray-50" : "opacity-100 bg-gray-50"
      }`}
      style={{ transformOrigin: "1px" }}
    />
    <span
      className={`block w-8 h-1 rounded-lg transform transition-all duration-300 ${
        open ? "-rotate-45 bg-gray-50" : "bg-gray-50"
      }`}
      style={{ transformOrigin: "1px" }}
    />
  </button>
);

const Menu: React.FC<{ open: boolean }> = ({ open }) => {
  const { t } = useTranslation();

  const navLinks: NavLinkItem[] = [
    { id: "about", label: t("hero_section.hero-nav.about") },
    { id: "skills", label: t("hero_section.hero-nav.skills") },
    { id: "portfolio", label: t("hero_section.hero-nav.portfolio") },
  ];

  return (
    <nav
<<<<<<< HEAD
      className={`flex flex-col justify-center items-center absolute inset-x-0 top-18 w-screen h-[12rem] bg-[rgba(29,26,25,0.95)] rounded-md shadow-lg overflow-hidden transform transition-all duration-300 origin-top ${
=======
      className={`flex justify-center items-center absolute inset-x-0 top-18 w-screen h-[18rem] bg-[rgba(29,26,25,0.95)] rounded-md shadow-lg overflow-hidden transform transition-all duration-300 origin-top ${
>>>>>>> c8553c8 (fix all problems)
        open
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
      role="menu"
    >
      <ul className="flex flex-col items-center gap-5">
        {navLinks?.map((link) => (
          <li
            className="w-screen flex flex-col items-center justify-center "
            key={link.id}
          >
            <Link
              to={link.id}
              smooth={true}
              offset={-80}
              duration={500}
              spy={true}
              activeClass="!bg-white !text-black"
              className=" text-amber-50 cursor-pointer hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <div
          onClick={() => window.open("https://wa.me/994516422532", "_blank")}
          className="flex justify-center items-center text-[0.8rem] text-black bg-amber-50 w-28 h-6 rounded-md cursor-pointer"
        >
          {t("hero_section.hero-nav.contact")}
        </div>
      </ul>
<<<<<<< HEAD
=======
       <div className="absolute top-3 right-5"><Dropdown/></div>
>>>>>>> c8553c8 (fix all problems)
    </nav>
  );
};

const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement | null>,
  handler: (event: MouseEvent) => void
) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
};

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="flex lg:hidden  min-h-auto items-center justify-center text-gray-50 font-sans">
<<<<<<< HEAD
      <div ref={node} className=" w-full px-8">
=======
      <div ref={node} className=" w-full px-4">
>>>>>>> c8553c8 (fix all problems)
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
    </div>
  );
};

export default BurgerMenu;
