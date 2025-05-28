import React from "react";
import Hd from "./Header.tsx";
import Ft from "./Footer.tsx";
import Quick from "./QuickMenu.tsx";

type LayoutProps = {
  children: React.ReactNode;
  mclassName?: string;
  cclassName? : string;
};

const Layout: React.FC<LayoutProps> = ({ children, mclassName, cclassName }) => {
  return (
    <div className={`relative flex flex-col min-h-screen  ${mclassName}`}> 
      <Hd />
      
      <div className={cclassName} >
         {children} 
      </div>
      <Quick />
      <Ft />
      
    </div>
  );
};

export default Layout;
