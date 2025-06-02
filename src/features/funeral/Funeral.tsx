import React from "react";
import FuneralProcedure from "./pages/FuneralProcedure";
import NormalFuneral from "./pages/NormalFuneral";
import StoneFuneral from "./pages/StoneFuneral";

type FuneralProps = {
  className?: string;
  componentNm: string; // 라우터 값으로 
};

const COMPONENT_MAP = {
  procedures: FuneralProcedure as React.FC<{ className?: string }>,
  price: NormalFuneral as React.FC<{ className?: string }>,
  stoneprice: StoneFuneral as React.FC<{ className?: string }>,
};


const Funeral: React.FC<FuneralProps> = ({ className = "", componentNm }) => {

  const Component = COMPONENT_MAP[componentNm as keyof typeof COMPONENT_MAP] || null;

  return (
    <div className={`relative flex flex-col ${className}`}>
      {Component && <Component className="" />}
    </div>
  );
};

export default Funeral;
