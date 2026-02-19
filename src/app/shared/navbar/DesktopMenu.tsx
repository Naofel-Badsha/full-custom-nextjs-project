import React from "react";
import { CgChevronDown } from "react-icons/cg";

const DesktopMenu = ({ menu }) => {
  //----- Cheaking if has sub menu
  const hasSubMenu = menu?.subMenu?.length > 0;
  return (
    <li className="text-white group/link">
      {/*------Yot can replace with react-router link------*/}
      <span className="flex items-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-white/5">
        {menu.name}
        {hasSubMenu && <CgChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />}
      </span>

      {
        hasSubMenu && (
          <div className="absolute top-[4.2rem] p-[15px] rounded-[6px] origin-[50%_-170px] backdrop:blur bg-[#1A1A1A]">
            <div>
              {
                menu?.subMenu?.map((subMenu, i) => (
                  <div key={i} className="relative cursor-pointer">
                    <div className="flex gap-x-4 group/menubox">
                      <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-[#262626] duration-300 text-[20px]">{subMenu?.icon && <subMenu.icon />}</div>
                       <div>
                        <h6 className="font-normal">{subMenu?.name}</h6>
                        <p className="text-sm text-gray-400">{subMenu?.desc}</p>
                       </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </li>
  );
};

export default DesktopMenu;
