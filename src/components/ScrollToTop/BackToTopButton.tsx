import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ScrollToUpButton: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 1000;
    const startTime = performance.now();

    const animateScroll = (currentTime: DOMHighResTimeStamp) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="font-[Montserrat-Bold] flex flex-col items-center justify-center text-amber-50 gap-1.5 cursor-pointer
      "
    >
      <img src="/assets/icons/footer-icons/double-arrow.svg" alt="arrow" />
      <span>{t("scroll_top")}</span>
    </button>
  );
};

export default ScrollToUpButton;
