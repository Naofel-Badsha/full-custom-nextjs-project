"use client";
import React from "react";
import { Menus } from "../../utils/navbaricon";
import DesktopMenu from "./DesktopMenu";
import MobilMenu from "./MobilMenu";
const Navbar = () => {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex items-center bg-[#18181A]">
        <nav className="px-3.5 flex items-center justify-between w-full max-w-7xl mx-auto">
          <div>
            {/*-----------Logo---------*/}
            <h4 className="text-white font-bold text-3xl">Logo</h4>
          </div>

          {/*----------Desktop------Menu----------*/}

          {/*------------Menu----------*/}
          <ul className="lg:flex items-center hidden gap-x-1">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name}></DesktopMenu>
            ))}
          </ul>

          {/*----------Singup--------Button---------*/}
          <div className="flex items-center gap-x-5">
            <button className="btn text-white rounded-xl px-3 py-1 bg-white/5 cursor-pointer">
              SingUp
            </button>
            <div className="lg:hidden">
              <MobilMenu Menus={Menus}/>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
