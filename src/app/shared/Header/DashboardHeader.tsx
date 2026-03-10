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
    <aside className="h-16 bg-white flex items-center px-6 shadow-md z-50 sticky top-0 left-0 right-0">
      {/*--------Toggle-------Button-------*/}
      <button onClick={toggleSidebar} className="text-2xl mr-4 cursor-pointer">
        ☰
      </button>

      <h1>Dashboard Header</h1>

      {/* Profile */}
      <div className="relative">
        <button
          onClick={() => setProfileOpen(!profileOpen)}
          className="bg-gray-500 text-white px-3 py-1 rounded"
        >
          Profile
        </button>

        {profileOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded text-black">
            <a className="block px-4 py-2 hover:bg-gray-100">My Profile</a>

            <a className="block px-4 py-2 hover:bg-gray-100">Settings</a>

            <a className="block px-4 py-2 hover:bg-gray-100">Logout</a>
          </div>
        )}
      </div>
    </aside>
  );
};

export default DashboardHeader;
