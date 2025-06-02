import React from "react";
import FuneralProcedure from "./pages/FuneralProcedure";
import NormalFuneral from "./pages/NormalFuneral";
import StoneFuneral from "./pages/StoneFuneral";

type FuneralComponentPath = "/procedures" | "/price" | "/stoneprice";

interface FuneralProps {
  className?: string;
  componentNm: FuneralComponentPath;
}

const Funeral: React.FC<FuneralProps> = ({ className = "", componentNm }) => {
  const safeComponentClass = componentNm.replace(/\//g, "");

  return (
    <div className={`relative flex flex-col ${className}`}>
      {componentNm === "/procedures" && <FuneralProcedure className={safeComponentClass} />}
      {componentNm === "/price" && <NormalFuneral className={safeComponentClass} />}
      {componentNm === "/stoneprice" && <StoneFuneral className={safeComponentClass} />}
    </div>
  );
};

export default Funeral;
