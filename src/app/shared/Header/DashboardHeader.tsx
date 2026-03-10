"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

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

  //--------User------Profile---------
  const [profileOpen, setProfileOpen] = useState(false);
  //--------Notification----------
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <aside className="h-16 bg-white flex items-center justify-between px-6 shadow-md z-50 sticky top-0 left-0 right-0">
      {/*--------Toggle-------Button-------*/}
      <button onClick={toggleSidebar} className="text-2xl mr-4 cursor-pointer">
        <FaBars className="text-[#008F45]"></FaBars>
      </button>

      <div className="flex items-center gap-5">
        {/*---------Notification----------*/}
        <div className="relative">
          <div
            className="flex cursor-pointer"
            onClick={() => setNotificationOpen(!notificationOpen)}
          >
            <IoMdNotificationsOutline className="text-3xl" />
            <span className="bg-red-500 p-1.5 w-[20px] h-[20px] rounded-full m-auto flex items-center justify-center text-md text-white absolute ml-4">
              9
            </span>
          </div>
          {notificationOpen && (
            <div className="absolute right-0 mt-4.5 w-40 bg-white rounded-xl shadow-md -mr-9">
              <div className=" text-black">
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Html</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Css</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">JavaScript</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">React Js</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Next Js</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">TypeScript</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Redux Toolkit</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Node Js</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Express js</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">MongoBD</a>
              </div>
            </div>
          )}
          <div className=""></div>
        </div>

        {/*---------Profile----------*/}
        <div className="relative">
          <Link href="">
            <Image
              onClick={() => setProfileOpen(!profileOpen)}
              src="/assets/userProfile.webp"
              alt=""
              width={40}
              height={40}
              className="object-cover w-auto rounded-full"
            ></Image>
          </Link>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded text-black">
              <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</a>
              <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</a>
              <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</a>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default DashboardHeader;
