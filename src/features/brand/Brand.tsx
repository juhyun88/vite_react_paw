import React from "react";

import BrandIntro from './pages/BrandIntro'
import DonationCampaign from './pages/DonationCampaign'

type BrandProps = {
  className?: string; 
  componentNm : string;
};

const Brand: React.FC<BrandProps> = ({ className = "", componentNm }) => {
  const safeComponentClass = componentNm.replace(/\//g, ""); // 슬래시 제거

  return (
    <div className={`relative flex flex-col ${className} `}>

      {
        componentNm === "/brendstory" ?  
          <BrandIntro className={safeComponentClass } />
        :
          <DonationCampaign className={safeComponentClass} />
      }
    </div>
  );
};

export default Brand