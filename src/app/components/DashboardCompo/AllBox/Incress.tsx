import Image from "next/image";
import { FaGift, FaUsers } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { SiRclone } from "react-icons/si";

const Incress = () => {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {/*-------Box-----1----*/}
      <div className="p-4 border-[1px] border-gray-200 bg-[#fff] rounded-xl shadow-md">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3 items-center">
            <FaGift className="text-4xl text-[#3B82F6]" />
            <div className="">
              <p className="text-[16px] font-normal text-black">New Orders</p>
              <h3 className="text-black text-xl font-semibold">1,390</h3>
            </div>
          </div>
          <div className="">
            <Image
              src="/assets/bar.png"
              alt=""
              width={50}
              height={50}
              className="object-cover w-auto"
            ></Image>
          </div>
        </div>

        <div className="flex items-center gap-2.5 mt-5">
          <p className="text-[15px] text-[#3B82F6]">+32.40%</p>
          <p className="text-[15px] text-gray-800">Increased last month</p>
        </div>
      </div>
      {/*-------Box-----2----*/}
      <div className="p-4 border-[1px] border-gray-200 bg-[#fff] rounded-xl shadow-md">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3 items-center">
            <SiRclone className="text-4xl text-[#10B981]" />
            <div className="">
              <p className="text-[16px] font-normal text-black">Total Lone</p>
              <h3 className="text-black text-xl font-semibold">$57,890</h3>
            </div>
          </div>
          <div className="">
            <Image
              src="/assets/bar.png"
              alt=""
              width={50}
              height={50}
              className="object-cover w-auto"
            ></Image>
          </div>
        </div>

        <div className="flex items-center gap-2.5 mt-5">
          <p className="text-[15px] text-[#10B981]">+32.40%</p>
          <p className="text-[15px] text-gray-800">Decrease last month</p>
        </div>
      </div>
      {/*-------Box-----3----*/}
      <div className="p-4 border-[1px] border-gray-200 bg-[#fff] rounded-xl shadow-md">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3 items-center">
            <IoHome className="text-4xl text-orange-500" />
            <div className="">
              <p className="text-[16px] font-normal text-black">Revenue</p>
              <h3 className="text-black text-xl font-semibold">$12,390</h3>
            </div>
          </div>
          <div className="">
            <Image
              src="/assets/bar.png"
              alt=""
              width={50}
              height={50}
              className="object-cover w-auto"
            ></Image>
          </div>
        </div>

        <div className="flex items-center gap-2.5 mt-5">
          <p className="text-[15px] text-orange-500">+32.40%</p>
          <p className="text-[15px] text-gray-800">Increased last month</p>
        </div>
      </div>
      {/*-------Box-----4----*/}
      <div className="p-4 border-[1px] border-gray-200 bg-[#fff] rounded-xl shadow-md">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3 items-center">
            <FaUsers className="text-4xl text-sky-400" />
            <div className="">
              <p className="text-[16px] font-normal text-black">Total Users</p>
              <h3 className="text-black text-xl font-semibold">1,590</h3>
            </div>
          </div>
          <div className="">
            <Image
              src="/assets/bar.png"
              alt=""
              width={50}
              height={50}
              className="object-cover w-auto"
            ></Image>
          </div>
        </div>

        <div className="flex items-center gap-2.5 mt-5">
          <p className="text-[15px] text-sky-400">+32.40%</p>
          <p className="text-[15px] text-gray-800">Increased last month</p>
        </div>
      </div>
    </div>
  );
};

export default Incress;
