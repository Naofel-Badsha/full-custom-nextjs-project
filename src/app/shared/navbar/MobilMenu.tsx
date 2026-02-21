import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const MobilMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggleDrawer} className="text-white z-[999] relative">
        {isOpen ? <IoClose /> : <IoMdMenu />}
      </button>

      <div>
        <ul>
            {
                Menus?.map(({name, subMenu}, i) =>{
                  const hasSubMenu = subMenu?.length > 0;  
                
                  return(
                    <li key={name}>
                        <span></span>
                    </li>
                  )
                })
            }
        </ul>
      </div>
    </div>
  );
};

export default MobilMenu;
