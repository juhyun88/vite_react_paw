import React from "react";
import Hd from "./Header.tsx";
import Ft from "./Footer.tsx";
import Quick from "./QuickMenu.tsx";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={`relative flex flex-col min-h-screen  ${className}`}
    style={{ backgroundImage: `url('https://pawfectwave.vercel.app/img/main/Main_background1.jpg')` }}> 
      <Hd />
      <main className="z-0">{children}</main>
      <Ft />
      <Quick />
    </div>
  );
};

export default Layout;
