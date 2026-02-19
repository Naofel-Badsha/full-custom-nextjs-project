import React, { useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { motion } from "framer-motion";


const DesktopMenu = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);

  //--------Toggle Hover Menu----------
  const toggleHoverMenu = () => {
     setIsHover(!isHover)
  }
  //----------Animation Variants---------
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: 'block'
    },
    exit:{
       opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: 'none'
    }
  }



  //----- Cheaking if has sub menu
  const hasSubMenu = menu?.subMenu?.length > 0;
  return (
    <motion.li className="text-white group/link" 
    onHoverStart={toggleHoverMenu}
    onHoverEnd={toggleHoverMenu}
    >
      {/*------Yot can replace with react-router link------*/}
      <span className="flex items-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-white/5">
        {menu.name}
        {hasSubMenu && (
          <CgChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>

      {hasSubMenu && (
        <motion.div className="absolute top-[4.2rem] p-[15px] rounded-[6px] origin-[50%_-170px] backdrop:blur bg-[#1A1A1A]"
        initial="exit"
        animate={isHover ? "enter" : "exit"}
        variants={subMenuAnimate}
        >
          <div
            className={`grid gap-3 
            ${
              menu.gridCols == 3
                ? "grid-cols-3"
                : menu.gridCols == 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
            }`}
          >
            {menu?.subMenu?.map((subMenu, i) => (
              <div key={i} className="relative cursor-pointer">
                <div className="flex gap-x-4 group/menubox">
                  <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-[#262626] duration-300 text-[20px]">
                    {subMenu?.icon && <subMenu.icon />}
                  </div>
                  <div>
                    <h6 className="font-normal">{subMenu?.name}</h6>
                    <p className="text-sm text-gray-400">{subMenu?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenu;
