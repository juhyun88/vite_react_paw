import React from "react";

import BrandIntro from './pages/BrandIntro'
import DonationCampaign from './pages/DonationCampaign'

type BrandProps = {
  className?: string;
};

const Brand: React.FC<BrandProps> = ({className }) => {
  return (
    <div className={`relative flex flex-col ${className}`}>
      <BrandIntro />
      <DonationCampaign />
    </div>
  )
}

export default Brand