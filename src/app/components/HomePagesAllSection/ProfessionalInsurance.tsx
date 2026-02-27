import Image from "next/image";
import React from "react";
import { FaArrowsToCircle } from "react-icons/fa6";

const ProfessionalInsurance = () => {
  return (
    <section className="py-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-10">
          {/*------------Content-----------*/}
          <div>
            {/*------------Heading----------*/}
            <div className="space-y-5">
              <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium">
                Professional Insurance
              </div>
              <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13 mt-5">
                The best time to get insurance is before you need it.
              </h2>
              <p className="text-[18px] font-light text-[#6d6d6d] w-[600px]">
                Tortor ligula pulvinar finibus primis eget tristique lacinia
                habitant.
              </p>
            </div>
            {/*-----------Card-------Column--------*/}
            <div className="space-y-6 mt-8">
              {/*--------Card--------1-------*/}
              <div className="flex gap-3 items-center bg-[#00A34D] rounded-xl p-5 hover:bg-[#1d1d1d] duration-500 group">
                <div className="group-hover:scale-110 duration-500">
                  <div className="bg-[#FFFFFF] p-4 text-4xl text-[#00863F] rounded-full  font-semibold">
                    <FaArrowsToCircle />
                  </div>
                </div>
                <div className=" space-y-1.5">
                  <h2 className="text-[#eee] text-[24px] font-semibold">
                    Best Quality Services
                  </h2>
                  <p className="text-[#e6e6e6] text-[18px] font-light">
                    Aliquam aliquet curabitur donec metus luctus. Eu blandit
                    elementum montes eget pulvinar platea scelerisque.
                  </p>
                </div>
              </div>
              {/*--------Card--------2-------*/}
              <div className="flex gap-3 items-center bg-[#00A34D] rounded-xl p-5 hover:bg-[#1d1d1d] duration-500 group">
                <div className="group-hover:scale-110 duration-500">
                  <div className="bg-[#FFFFFF] p-4 text-4xl text-[#00863F] rounded-full  font-semibold">
                    <FaArrowsToCircle />
                  </div>
                </div>
                <div className=" space-y-1.5">
                  <h2 className="text-[#eee] text-[24px] font-semibold">
                    Professional Agent
                  </h2>
                  <p className="text-[#e6e6e6] text-[18px] font-light">
                    Ac pellentesque consequat nullam fermentum interdum. Orci
                    risus vivamus lacus primis tempor proin massa.
                  </p>
                </div>
              </div>
              {/*--------Card--------3-------*/}
              <div className="flex gap-3 items-center bg-[#00A34D] rounded-xl p-5 hover:bg-[#1d1d1d] duration-500 group">
                <div className="group-hover:scale-110 duration-500">
                  <div className="bg-[#FFFFFF] p-4 text-4xl text-[#00863F] rounded-full  font-semibold">
                    <FaArrowsToCircle />
                  </div>
                </div>
                <div className=" space-y-1.5">
                  <h2 className="text-[#eee] text-[24px] font-semibold">
                    24 Years Experience
                  </h2>
                  <p className="text-[#e6e6e6] text-[18px] font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*------------Images-----------*/}
          <div className="flex gap-5">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/professiona-3.webp"
                alt="Professional Insurance"
                width={500}
                height={500}
                className="w-full h-[450px] object-cover rounded-xl shadow p-3"
              ></Image>
            </div>

            <div className="space-y-5">
              <Image
                src="/assets/professiona-1.webp"
                alt="Professional Insurance"
                width={500}
                height={500}
                className="w-full h-[200px] object-cover rounded-xl shadow p-3 border"
              ></Image>
              <Image
                src="/assets/professiona-2.webp"
                alt="Professional Insurance"
                width={500}
                height={500}
                className="w-full h-[450px] object-cover rounded-xl shadow p-3"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInsurance;
