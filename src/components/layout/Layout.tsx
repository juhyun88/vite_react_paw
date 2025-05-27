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
    <div className={`relative flex flex-col min-h-screen bg-transparent  ${className}`}> 
      <Hd />
      
      <main className="">{children} <Quick />
      </main>
      
      <Ft />
      
    </div>
  );
};

export default Layout;
