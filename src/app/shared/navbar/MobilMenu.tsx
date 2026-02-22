import { useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const MobilMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  //---------Toggle drawer---------
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null)
  };

  //--------Toggle sub menu item-------
  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: 'hidden',
    },
    exit: {
      height: "0",
      overflow: 'hidden',
    },
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="text-white z-[999] relative">
        {isOpen ? (
          <IoClose className="text-3xl cursor-pointer" />
        ) : (
          <IoMdMenu className="text-3xl cursor-pointer" />
        )}
      </button>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181a] backdrop-blur text-white p-6"
      >
        <ul>
          {Menus?.map(({ name, subMenu }, i) => {
            //--------Checking if sub menu exist------
            const hasSubMenu = subMenu?.length > 0;
            //---------Cheacking if menu is clicked-----
            const isClicked = clicked == i;
            return (
              <li key={name}>
                {/*------Toggle SubMenu item open------*/}
                <span
                  onClick={() => setClicked(isClicked ? null : i)}
                  className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                >
                  {name}
                  {hasSubMenu && (
                    <CgChevronDown
                      className={`ml-auto ${isClicked && "rotate-180 duration-200"}`}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                  initial = "exit"
                  animate={isClicked ? 'enter' : 'exit'} 
                  variants={subMenuDrawer}
                  className="ml-5">
                    {subMenu?.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex items-center gap-x-2 hover:bg-white/5 rounded-md cursor-pointer"
                      >
                        <Icon size={17} />
                        <span>{name}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobilMenu;
