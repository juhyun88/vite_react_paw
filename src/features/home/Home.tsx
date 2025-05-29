import React from "react";

import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import InfoHighlightSection from './components/InfoHighlightSection'
import SnsSection from './components/SnsSection'
import CampaignSection from './components/CampaignSection'
import QustionSection from './components/QustionSection'  

type HomeProps = {
  className?: string;
};

const Home: React.FC<HomeProps> = ({className }) => {
  return (
    <div className={`relative flex flex-col ${className}`}>
      <HeroSection className="z-0">{}</HeroSection>
      <IntroSection />
      <InfoHighlightSection />
      <QustionSection />
      <SnsSection />
      <CampaignSection />
    </div>
  )
}

export default Home







