import React from "react";
import { CgChevronDown } from "react-icons/cg";

const DesktopMenu = ({ menu }) => {
  //----- Cheaking if has sub menu
  const hasSubMenu = menu?.subMenu?.length > 0;
  return (
    <li className="text-white">
      {/*------Yot can replace with react-router link------*/}
      <span className="flex items-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-white/5">
        {menu.name}
        {hasSubMenu && <CgChevronDown className="mt-[0.6px]" />}
      </span>
    </li>
  );
};

export default DesktopMenu;
