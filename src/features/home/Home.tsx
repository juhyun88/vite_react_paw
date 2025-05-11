import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import InfoHighlightSection from './components/InfoHighlightSection'
import SnsSection from './components/SnsSection'
import CampaignSection from './components/CampaignSection'
import QustionSection from './components/QustionSection'    

const Home = () => {
  return (
    <div className="space-y-20">
      <HeroSection />
      <IntroSection />
      <InfoHighlightSection />
      <QustionSection />
      <SnsSection />
      <CampaignSection />
    </div>
  )
}

export default Home