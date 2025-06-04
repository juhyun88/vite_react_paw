import React from "react";
import Boneservice from './pages/Boneservice';
import Cybermemorial from './pages/Cybermemorial';
import Funeralservice from './pages/Funeralservice';
import Noncompaniedservice from './pages/Noncompaniedservice';


type ServiceProps = {
  className?: string;
  componentNm: string; // 라우터 값으로 
};

const COMPONENT_MAP = {
    boneservice: Boneservice as React.FC<{ className?: string }>,
    cybermemorial: Cybermemorial as React.FC<{ className?: string }>,
  funeralservice: Funeralservice as React.FC<{ className?: string }>,
  noncompaniedservice: Noncompaniedservice as React.FC<{ className?: string }>,
};


const Service: React.FC<ServiceProps> = ({ className = "", componentNm }) => {

  const Component = COMPONENT_MAP[componentNm as keyof typeof COMPONENT_MAP] || null;

  return (
    <div className={`relative flex flex-col ${className}`}>
      {Component && <Component className="" />}
    </div>
  );
};

export default Service;
