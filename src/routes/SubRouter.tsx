import React from 'react';
import { Menu } from '../types/common';

type SubRouterProps = {
  menu: Menu;
};

const SubRouter: React.FC<SubRouterProps> = ({ menu }) => {
  return (
    <div className="flex items-center justify-center bg-white text-black p-8 xl:h-[600px] h-[100vw] text-white" 
         style={{ 
            background : `url(https://juhyun88.github.io/pawfectwave_team_react/img/subpage/${menu.code}.jpg) no-repeat center`,
            backgroundSize : "100%"}}>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">{menu.title}</h1>
        
        <p className="mt-2 text-sm ">{menu.sub_title}</p>
      </div>
    </div>
  );
};

export default SubRouter;


