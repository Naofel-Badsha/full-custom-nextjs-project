import Link from "next/link";
import React from "react";
import {
  FaEnvelopeOpenText,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneVolume,
  FaTwitter,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="bg-[#005224] ">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 py-5 lg:px-8">
        <div className="flex flex-wrap gap-1.5 lg:gap-4">
          {/*-------1-------*/}
          <div className="flex gap-1.5 cursor-pointer group">
            <FaMapMarkerAlt className="text-[16px] lg:text-[20px] text-[#019A49] group-hover:text-white" />
            <p className="text-white group-hover:text-white text-[13px] lg:text-[15px]">KLLG st, No 99,Pku City</p>
          </div>
          {/*-------1-------*/}
          <div className="flex gap-1.5 cursor-pointer group">
            <FaPhoneVolume className="text-[16px] lg:text-[20px] text-[#019A49] group-hover:text-white" />
            <p className="text-white group-hover:text-white text-[13px] lg:text-[15px]">+(123) 4567 7890</p>
          </div>
          {/*-------1-------*/}
          <div className="flex gap-1.5 cursor-pointer group">
            <FaEnvelopeOpenText className="text-[16px] lg:text-[20px] text-[#019A49] group-hover:text-white" />
            <p className="text-white group-hover:text-white text-[13px] lg:text-[15px]">info@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 lg:gap-4">
          <Link href="">
            <FaFacebook className="text-[16px] lg:text-[20px] text-white hover:rotate-360 duration-500" />
          </Link>
          <Link href="">
            <FaTwitter className="text-[16px] lg:text-[20px] text-white hover:rotate-360 duration-500" />
          </Link>
          <Link href="">
            <FaInstagram className="text-[16px] lg:text-[20px] text-white hover:rotate-360 duration-500" />
          </Link>
          <Link href="">
            <FaLinkedin className="text-[16px] lg:text-[20px] text-white hover:rotate-360 duration-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
