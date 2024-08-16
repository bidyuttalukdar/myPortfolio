import React from "react";
import Header from "../../component/layout/header";
import Footer from "../../component/layout/footer";

import { Outlet } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
  
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
