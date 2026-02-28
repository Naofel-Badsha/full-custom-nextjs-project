import Image from "next/image";
import React from "react";

const TeamMembers = () => {
  return (
    <section className="py-[100px] bg-[#EAF3EA]">
      <div className="max-w-7xl mx-auto">
        {/*------------Content-----------*/}
        <div className="space-y-5">
          <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium m-auto">
            Team Members
          </div>
          <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13 text-center mt-5">
            Meet The Awesome Team.
          </h2>
          <p className="text-[18px] font-light text-[#6d6d6d] text-center w-[600px] m-auto">
            Tortor ligula pulvinar finibus primis eget tristique.
          </p>
        </div>
        {/*---------Team------Member---------*/}
        <div className="">
          <div className="w-[350px] rounded-2xl overflow-hidden shadow-lg bg-white">
            {/* Image Section */}
            <div className="relative">
              <Image
                src="/assets/professiona-2.webp"
                alt="Team Member"
                width={500}
                height={500}
                className="w-full h-[420px] object-cover shadow p-3"
              ></Image>

              {/* Bottom Info Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-green-800 rounded-xl px-6 py-4 flex items-center justify-between">
                {/* Name + Role */}
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Bryan Walker
                  </h3>
                  <p className="text-green-200 text-sm">Insurance Expert</p>
                </div>

                {/* Share + Social */}
                <div className="relative group flex items-center">
                  {/* Social Icons */}
                  <div
                    className="
              absolute -top-12 right-0
              flex gap-2
              opacity-0 translate-x-6
              group-hover:opacity-100
              group-hover:translate-x-0
              transition-all duration-300
            "
                  >
                    <a
                      href="#"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-800 text-sm font-bold shadow"
                    >
                      F
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-800 text-sm font-bold shadow"
                    >
                      T
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-800 text-sm font-bold shadow"
                    >
                      I
                    </a>
                  </div>

                  {/* Share Button */}
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h8m0 0l-3-3m3 3l-3 3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
