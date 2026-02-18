import { BiLock, BiMapPin, BiShieldPlus, BiShoppingBag } from "react-icons/bi";
import { FaBolt, FaDatabase, FaUserSecret } from "react-icons/fa";
import { FaCircleH } from "react-icons/fa6";
import { FiFigma, FiMessageCircle } from "react-icons/fi";
import { ImImages } from "react-icons/im";
import {
  LuBellDot,
  LuBookOpenText,
  LuBriefcaseBusiness,
  LuPanelsTopLeft,
  LuPanelTop,
  LuTriangleAlert,
} from "react-icons/lu";
import { PiDresser, PiLayout } from "react-icons/pi";


export const Menus = [
  {
    name: "Features",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Desigen",
        desc: "Responsive desigen",
        icon: LuPanelsTopLeft,
      },
      {
        name: "Management",
        desc: "Site control",
        icon: FaBolt,
      },
      {
        name: "Navigation",
        desc: "Link pages",
        icon: LuPanelTop,
      },
      {
        name: "CMS",
        desc: "Management content",
        icon: FaDatabase,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Resources",
    subMenuHeading: ["Get started", "Programs", "Recent"],
    subMenu: [
      {
        name: "Markplace",
        desc: "Browse templates",
        icon: BiShoppingBag,
      },
      {
        name: "Meetups",
        desc: "Upcoming events",
        icon: BiMapPin,
      },
      {
        name: "Updates",
        desc: "Changelog",
        icon: LuBellDot,
      },
      {
        name: "Academy",
        desc: "Watch lessions",
        icon: PiLayout,
      },
      {
        name: "Blog",
        desc: "Posts",
        icon: LuBookOpenText,
      },
      {
        name: "Figma",
        desc: "Plugin",
        icon: FiFigma,
      },
      {
        name: "Experts",
        desc: "Jobs",
        icon: LuBriefcaseBusiness,
      },
      {
        name: "Gallery",
        desc: "Images",
        icon: ImImages,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Support",
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: FaCircleH,
      },
      {
        name: "Community",
        desc: "Project help",
        icon: FiMessageCircle,
      },
      {
        name: "Emergency",
        desc: "Urgent issues",
        icon: LuTriangleAlert,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Enterprise",
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: BiShieldPlus,
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: FaUserSecret,
      },
      {
        name: "Customers",
        desc: "Stories",
        icon: PiDresser,
      },
      {
        name: "Security",
        desc: "Your site secured",
        icon: BiLock,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Price",
  },
  {
    name: "Contact",
  },
];
