import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden mx-auto max-w-7xl px-6 py-5 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Hero-1.webp"
          alt="Insurance Team"
          fill
          priority
          className="object-cover"
        />
        {/*-----------Green Gradient Overlay----------*/}
        <div className="absolute inset-0 bg-gradient-to-r from-[#033b1c]/95 via-[#046b34]/85 to-transparent"></div>
      </div>

      {/*----------Content-----------*/}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center">
        {/*-----------Left Content----------*/}
        <div>
          <p className="flex items-center gap-2 text-white text-sm font-semibold mb-4">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
            WELCOME ZANCE AGENCY
          </p>

          <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Protect What <br />
            Matters Most With <br />
            Insurance That <br />
            Cares.
          </h1>

          <p className="mt-6 max-w-xl text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-2 mt-8 bg-[#00a651] hover:bg-[#008f45] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            DISCOVER MORE
            <span>↗</span>
          </Link>
        </div>

        {/*-----------Right Content----------*/}
        <div className="hidden lg:flex justify-end items-center gap-8">
          {/*---------Customers-----------*/}
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold">12.5K</h2>
            <p className="text-white/80 mt-1">Active Customer</p>
          </div>

          {/*-----------Badge-------------*/}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
            <Image
              src="/assets/badge.png" 
              alt="Top Insurance Agency"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-4 text-white font-semibold">
              Top Insurance <br /> Agency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
