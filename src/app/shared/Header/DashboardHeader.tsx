"use client";
import React, { useState } from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardHeader = ({
  open,
  setOpen,
  mobileOpen,
  setMobileOpen,
}: Props) => {
  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setMobileOpen(!mobileOpen);
    } else {
      setOpen(!open);
    }
  };

  //--------user------Profile---------
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className="h-16 bg-gray-300 flex items-center px-6 shadow">
      {/*--------Toggle-------Button-------*/}
      <button onClick={toggleSidebar} className="text-2xl mr-4 cursor-pointer">
        ☰
      </button>
      
       <h1>Dashboard Header</h1>
    </div>
  );
};

export default DashboardHeader;
