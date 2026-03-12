import React from "react";
import { BiHome } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { TbFidgetSpinner } from "react-icons/tb";

const ChannelRevenue = () => {
  return (
    <div className="col-span-1 bg-white p-4 rounded-xl shadow-md mt-6 border-[1px] border-gray-200">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[20px] text-black font-bold">Channel Revenue</h2>
        <button className="text-[14px] font-normal px-3 py-1.5 border-[1px] rounded-[5px]  border-gray-400 hover:border-gray-800">
          Monthly
        </button>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <h2 className="text-[30px] font-semibold text-black">3.4%</h2>
        <p className="text-[16px] font-normal text-gray-800">Growth Rate</p>
      </div>

      <div className="flex gap-5 items-center justify-between mt-6">
        <div className="w-full">
          <div className="w-full h-[5px] bg-sky-500 rounded-full"></div>
          <p className="text-[16px] text-gray-800">28%</p>
        </div>
        <div className="w-full">
          <div className="w-full h-[5px] bg-green-500 rounded-full"></div>
          <p className="text-[16px] text-gray-800">38%</p>
        </div>
        <div className="w-full">
          <div className="w-full h-[5px] bg-orange-500 rounded-full"></div>
          <p className="text-[16px] text-gray-800">42%</p>
        </div>
      </div>

      <div className="bg-[#E5E7EB] p-5 rounded-md flex items-center justify-between mt-10">
        <div className="space-y-2">
          <div className="bg-sky-500 p-2 w-fit rounded-full">
            <IoMdCart className="text-3xl text-white" />
          </div>
          <p className="text-xl text-[16px] font-medium text-gray-800">$2.9K</p>
          <p className="text-xl text-[15px] font-normal text-gray-800 -mt-2">Online store</p>
        </div>

        <div className="space-y-2">
          <div className="bg-green-500 p-2 w-fit rounded-full">
            <BiHome className="text-3xl text-white" />
          </div>
          <p className="text-xl text-[16px] font-medium text-gray-800">$5.9K</p>
          <p className="text-xl text-[15px] font-normal text-gray-800 -mt-2">Online store</p>
        </div>

        <div className="space-y-2">
          <div className="bg-orange-500 p-2 w-fit rounded-full">
            <TbFidgetSpinner className="text-3xl text-white" />
          </div>
          <p className="text-xl text-[16px] font-medium text-gray-800">$6.9K</p>
          <p className="text-xl text-[15px] font-normal text-gray-800 -mt-2">Online store</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelRevenue;
