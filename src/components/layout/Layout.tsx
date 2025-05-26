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
    <div className={`relative flex flex-col ${className}`}>
      <Hd />
      <main className="flex-1">{children}</main>
      <Ft />
      <Quick />
    </div>
  );
};

export default Layout;
