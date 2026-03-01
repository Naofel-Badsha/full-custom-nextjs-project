import React from "react";
import { FaGlobe, FaHandshake, FaSortAmountUpAlt } from "react-icons/fa";

const CountUp = () => {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/*----------Conunter---------1----------*/}
      <div className="flex gap-4 items-center justify-center py-5 px-3 bg-white rounded-2xl p-3 shadow border-[1px] border-gray-200 group">
        <div className="group-hover:scale-110 duration-500">
          <div className="bg-[#00863F] p-4 text-4xl text-[#ffffff] rounded-full  font-semibold shadow w-fit border">
            <FaGlobe />
          </div>
        </div>
        <div className="">
          <h1 className="text-[#1d1d1d] text-[42px] font-semibold">240+</h1>
        </div>
        <div className="">
          <h4 className="text-[19px] text-[#1d1d1d] font-semibold">Global Country</h4>
          <p className="text-[18px] text-[#6d6d6d] font-light">Primis ligula ligula</p>
        </div>
      </div>
      {/*----------Conunter---------2----------*/}
      <div className="flex gap-4 items-center justify-center py-5 px-3 bg-white rounded-2xl p-3 shadow border-[1px] border-gray-200 group">
        <div className="group-hover:scale-110 duration-500">
          <div className="bg-[#00863F] p-4 text-4xl text-[#ffffff] rounded-full  font-semibold shadow w-fit border">
            <FaHandshake />
          </div>
        </div>
        <div className="">
          <h1 className="text-[#1d1d1d] text-[42px] font-semibold">120+</h1>
        </div>
        <div className="">
          <h4 className="text-[19px] text-[#1d1d1d] font-semibold">Company Growth</h4>
          <p className="text-[18px] text-[#6d6d6d] font-light">Augue sagittis tempor</p>
        </div>
      </div>
      {/*----------Conunter---------3----------*/}
      <div className="flex gap-4 items-center justify-center py-5 px-3 bg-white rounded-2xl shadow border-[1px] border-gray-200 group">
        <div className="group-hover:scale-110 duration-500">
          <div className="bg-[#00863F] p-4 text-4xl text-[#ffffff] rounded-full  font-semibold shadow w-fit border">
            <FaSortAmountUpAlt />
          </div>
        </div>
        <div className="">
          <h1 className="text-[#1d1d1d] text-[42px] font-semibold">98%</h1>
        </div>
        <div className="">
          <h4 className="text-[19px] text-[#1d1d1d] font-semibold">Satisfaction Rate</h4>
          <p className="text-[18px] text-[#6d6d6d] font-light">Lorem ipsum dolor</p>
        </div>
      </div>
    </div>
  );
};

export default CountUp;
