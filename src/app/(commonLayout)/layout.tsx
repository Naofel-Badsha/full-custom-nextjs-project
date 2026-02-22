import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import TopNavbar from "../shared/Navbar/TopNavbar";


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
