import React from "react";
import  { FaCarCrash, FaToolbox, FaUsers } from "react-icons/fa";
import  { IoHome } from "react-icons/io5";
import { MdOutlineFamilyRestroom, MdTravelExplore } from "react-icons/md";


interface OfferingType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}


const offerings: OfferingType[] = [
  {
    id: "1",
    name: "Family Insurance",
    description:
      "Family Insurance offers comprehensive coverage for all family members, including health, accidents, and emergency expenses, ensuring collective financial protection and long-term family well-being.",
    icon: <MdOutlineFamilyRestroom />,
  },
  {
    id: "2",
    name: "Home Insurance",
    description:
      "Home Insurance protects your house and personal property from fire, theft, natural disasters, and unexpected damages, ensuring long-term financial security and peace of mind for homeowners.",
    icon: <IoHome />,
  },
  {
    id: "3",
    name: "Car Insurance",
    description:
      "Car Insurance provides financial protection against accidents, vehicle damage, theft, and third-party liabilities, helping you drive confidently while minimizing unexpected repair and legal costs.",
    icon: <FaCarCrash />,
  },
  {
    id: "4",
    name: "Business Insurance",
    description:
      "Business Insurance safeguards your company from property damage, liability claims, theft, and operational risks, ensuring stability, continuity, and financial protection against unexpected business losses.",
    icon: <FaToolbox />,
  },
  {
    id: "5",
    name: "Travel Insurance",
    description:
      "Travel Insurance covers medical emergencies, trip cancellations, lost luggage, and travel-related risks, allowing you to enjoy your journey with confidence and complete financial protection.",
    icon: <MdTravelExplore />,
  },
  {
    id: "6",
    name: "Life Insurance",
    description:
      "Life Insurance ensures financial security for your loved ones by providing support during unforeseen events, helping cover expenses, debts, and future needs with peace of mind.",
    icon: <FaUsers />,
  },
];

const WhatWereOffering = () => {
  return (
    <section className="py-[100px] bg-[#EAF3EA]">
      <div className="max-w-7xl mx-auto">
        {/*------------Content-----------*/}
        <div className="space-y-5">
          <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-semibold m-auto">
            What we're offering
          </div>
          <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13 text-center mt-5">
            Highlighting services or <br /> insurance plans.
          </h2>
          <p className="text-[18px] font-light text-[#6d6d6d] text-center w-[600px] m-auto">
            Sagittis mi eros purus commodo himenaeos ac. Primis ligula ligula
            ultricies lacinia interdum etiam proin. Blandit fames finibus
            consequat luctus.
          </p>
        </div>
        {/*------------Card-----------*/}
        <div className="">
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className="relative w-80 p-8 rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden font-sans"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 opacity-20">
                <div className="absolute inset-0 border-[2px] border-green-600 rounded-full scale-[1.0]"></div>
                <div className="absolute inset-0 border-[2px] border-green-600 rounded-full scale-[0.8]"></div>
                <div className="absolute inset-0 border-[2px] border-green-600 rounded-full scale-[0.6]"></div>
                <div className="absolute inset-0 border-[2px] border-green-600 rounded-full scale-[0.4]"></div>
              </div>

              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage:
                    "radial-gradient(#166534 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
              ></div>

              <div className="relative z-10 flex flex-col items-start">
                <div className="w-20 h-20 bg-[#064e3b] rounded-full flex items-center justify-center border-[6px] border-white shadow-md mb-6">
                 <span className="text-white">
                  {offering.icon}
                 </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                  {offering.name}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {offering.description}
                </p>

                <button className="bg-[#00a854] hover:bg-[#008f47] text-white font-bold py-4 px-8 rounded-2xl flex items-center transition-colors group">
                  READ MORE
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWereOffering;

