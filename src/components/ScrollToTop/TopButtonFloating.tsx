import React, { useEffect, useState } from "react";

const TopButtonFloating: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrolledEnough = scrollTop > windowHeight / 2;
      const isAtBottom = scrollTop + windowHeight >= docHeight - 10;

      setIsVisible(scrolledEnough && !isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 600;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start * (1 - ease));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed top-64 right-3 z-50
        font-[Montserrat-Bold]
        flex flex-col items-center justify-center
        text-amber-50 gap-1.5 cursor-pointer
        transition-opacity duration-300
        opacity-100
      "
    >
      <img
        className="w-[3rem] h-[3rem]"
        src="/assets/icons/up-arrow.svg"
        alt="arrow"
      />
    </button>
  );
};

export default TopButtonFloating;
