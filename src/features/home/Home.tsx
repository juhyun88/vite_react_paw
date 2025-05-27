import React from "react";

import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import InfoHighlightSection from './components/InfoHighlightSection'
import SnsSection from './components/SnsSection'
import CampaignSection from './components/CampaignSection'
import QustionSection from './components/QustionSection'  

type HomeProps = {
  children?: React.ReactNode;
  className?: string;
};

const Home: React.FC<HomeProps> = ({ children, className }) => {
  return (
    <div className={`relative flex flex-col ${className}`}>
      <HeroSection className="z-0">{children}</HeroSection>
      <IntroSection />
      <InfoHighlightSection />
      <QustionSection />
      <SnsSection />
      <CampaignSection />
    </div>
  )
}

export default Home







