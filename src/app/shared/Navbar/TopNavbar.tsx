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
    <div className="bg-[#005224] px-6 py-5 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          {/*-------1-------*/}
          <div className="flex gap-1.5 cursor-pointer group ">
            <FaMapMarkerAlt className="text-xl text-[#019A49] group-hover:text-white" />
            <p className="text-white group-hover:text-white">KLLG st, No 99,Pku City</p>
          </div>
          {/*-------1-------*/}
          <div className="flex gap-1.5 cursor-pointer group">
            <FaPhoneVolume className="text-xl text-[#019A49] group-hover:text-white" />
            <p className="text-white group-hover:text-white">+(123) 4567 7890</p>
          </div>
          {/*-------1-------*/}
          <div className="flex gap-1.5 cursor-pointer group">
            <FaEnvelopeOpenText className="text-xl text-[#019A49] group-hover:text-white" />
            <p className="text-white group-hover:text-white">@emailexample.com</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="">
            <FaFacebook className="text-xl text-white hover:rotate-360 duration-500" />
          </Link>
          <Link href="">
            <FaTwitter className="text-xl text-white hover:rotate-360 duration-500" />
          </Link>
          <Link href="">
            <FaInstagram className="text-xl text-white hover:rotate-360 duration-500" />
          </Link>
          <Link href="">
            <FaLinkedin className="text-xl text-white hover:rotate-360 duration-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
