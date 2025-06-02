import React from "react";
import BrandIntro from './pages/BrandIntro';
import DonationCampaign from './pages/DonationCampaign';

type BrandProps = {
  className?: string;
  componentNm: string; // 라우터 값으로 
};

const COMPONENT_MAP = {
  brandstory: BrandIntro as React.FC<{ className?: string }>,
  campain: DonationCampaign as React.FC<{ className?: string }>,
};


const Brand: React.FC<BrandProps> = ({ className = "", componentNm }) => {

  const Component = COMPONENT_MAP[componentNm as keyof typeof COMPONENT_MAP] || null;

  return (
    <div className={`relative flex flex-col ${className}`}>
      {Component && <Component className="" />}
    </div>
  );
};

export default Brand;
