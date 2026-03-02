import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import TopNavbar from "../shared/Navbar/TopNavbar";
import Footer from "../shared/Footer/Footer";


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
