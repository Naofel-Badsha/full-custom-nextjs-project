import Link from "next/link";
import React from "react";

const TeamBanner = () => {
  return (
    <section className="">
      {/*------------Banner-------------*/}
      <div
        className="relative w-full bg-[#006b33] overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #008445 0%, #006b33 100%)`,
        }}
      >
        {/*--------Decorative Diamond Overlay (Subtle)----------*/}
        <div
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')`,
          }}
        ></div>

        {/*--------Left Content Area---------*/}
        <div className="w-full p-10 md:p-24 z-10 text-white">
          <div className="flex items-center justify-center gap-3 ">
            <Link
              href="/"
              className="text-xl font-medium text-green-500 uppercase"
            >
              Home
            </Link>{" "}
            -
            <Link
              href="/contactus"
              className="text-xl font-medium text-white hover:text-green-500 uppercase"
            >
              Our Contactus
            </Link>
          </div>

          <h1 className="text-[42px] font-bold leading-12 mb-8 text-center mt-3">
            OUR TOTAL MEMBER
          </h1>
        </div>
      </div>
    </section>
  );
};

export default TeamBanner;
