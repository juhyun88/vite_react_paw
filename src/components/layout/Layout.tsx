import React from "react";
import Hd from "./Header.tsx";
import Ft from "./Footer.tsx";
import Quick from "./QuickMenu.tsx";

import { Menu } from '../../types/common.ts';


type LayoutProps = {
  children: React.ReactNode;
  menuArr: Menu[]; 
  mclassName?: string;
  cclassName? : string; 
};


const Layout: React.FC<LayoutProps> = ({ children, menuArr, mclassName, cclassName  }) => {
  return (
    <div className={`relative flex flex-col min-h-screen ${mclassName}`}> 
      <Hd menuArr={menuArr} />
      
      <div className={cclassName} >
         {children} 
      </div>
      <Quick />
      <Ft />
      
    </div>
  );
};

export default Layout;
