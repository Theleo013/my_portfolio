import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FrontendSection from "@/components/FrontendSection";
import SkillSection from "@/components/SkillSection";
import Portfolio from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import TopButtonFloating from "@/components/ScrollToTop/TopButtonFloating";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <FrontendSection />
      <div className="bg-[radial-gradient(ellipse_50%_80%,_rgba(255,255,255,0.4)_0%,_#d7d7d7_100%)] p-5 lg:px-16 lg:py-20">
        <AboutSection />
        <SkillSection />
      </div>
      <Portfolio />
      <ContactSection />
      <Footer />
      <TopButtonFloating />
    </main>
  );
};

export default Home;
