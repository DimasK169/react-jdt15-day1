import React from "react";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Home from "./pages/home/home";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
