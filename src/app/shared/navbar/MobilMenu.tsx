import { useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const MobilMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null)

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggleDrawer} className="text-white z-[999] relative">
        {isOpen ? <IoClose className="text-3xl cursor-pointer"/> : <IoMdMenu className="text-3xl cursor-pointer"/>}
      </button>

      <div className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181a] backdrop-blur text-white p-6">
        <ul>
          {Menus?.map(({ name, subMenu }, i) => {
            //--------Checking if sub menu exist------
            const hasSubMenu = subMenu?.length > 0;
            //---------Cheacking if menu is clicked-----
            const isClicked = clicked == i;
            return (
              <li key={name}>
                {/*------Toggle SubMenu item open------*/}
                <span onClick={() => setClicked(isClicked ? null : i)} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative">
                  {name}
                  {hasSubMenu && <CgChevronDown className={`ml-auto ${isClicked && 'rotate-180 duration-200'}`}/>}
                </span>

              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobilMenu;
