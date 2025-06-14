import React from "react";
import Measure from './components/Measure';
import Petroscare from './components/Petroscare';
import Question from './components/Question';
import Inquire from './components/Inquire';

type SupportProps = {
  className?: string;
  componentNm: string; // 라우터 값으로 
};

const COMPONENT_MAP = {
    Measure: Measure as React.FC<{ className?: string }>,
    petlose: Petroscare as React.FC<{ className?: string }>,
    question: Question as React.FC<{ className?: string }>,
    inquire: Inquire as React.FC<{ className?: string }>,
};


const Support: React.FC<SupportProps> = ({ className = "", componentNm }) => {

  const Component = COMPONENT_MAP[componentNm as keyof typeof COMPONENT_MAP] || null;

  return (
    <div className={`relative flex flex-col ${className}`}>
      {Component && <Component className="" />}
    </div>
  );
};

export default Support;
