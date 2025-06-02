import React from "react";
import BranchIntro from './pages/BranchIntro';
import Location from './pages/Location';

type BrandProps = {
  className?: string;
  componentNm: string; // 라우터 값으로 
};

const COMPONENT_MAP = {
  store: BranchIntro as React.FC<{ className?: string }>,
  way: Location as React.FC<{ className?: string }>,
};


const Branch: React.FC<BrandProps> = ({ className = "", componentNm }) => {

  const Component = COMPONENT_MAP[componentNm as keyof typeof COMPONENT_MAP] || null;

  return (
    <div className={`relative flex flex-col ${className}`}>
      {Component && <Component className="" />}
    </div>
  );
};

export default Branch;
