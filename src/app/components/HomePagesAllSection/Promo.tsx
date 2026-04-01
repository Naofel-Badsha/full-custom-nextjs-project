import Link from "next/link";
import React from "react";

const Promo = () => {
  return (
    <section className="py-[100px] bg-[#f1f7f2]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative w-full overflow-hidden rounded-2xl bg-cover bg-center px-8 py-15 text-center text-white shadow-xl"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 77, 38, 0.85), rgba(0, 77, 38, 0.85)), url('https://img.freepik.com/premium-vector/modern-gradient-minimalist-background-design_336924-7142.jpg')`,
          }}
        >
          {/*--------------------Circle--------------------*/}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-[400px] h-[400px] border border-white rounded-full"></div>
            <div className="absolute -top-12 -left-12 w-[300px] h-[300px] border border-white rounded-full"></div>
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] border border-white rounded-full"></div>
          </div>

          {/*-------------Content Section----------------*/}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium">
              Promo
            </div>
            <h1 className="max-w-4xl text-[30px] lg:text-[42px] font-semibold leading-tight md:text-5xl lg:text-6xl drop-shadow-lg">
              Save 30% On Your Every <br className="hidden md:block" /> Home
              Insurance Policy.
            </h1>
            <p className="max-w-xl text-[18px] text-[#eee] font-light">
              Tortor ligula pulvinar finibus primis eget tristique.
            </p>
            <div className="flex items-center justify-center">
              <Link
                href="our-team"
                className="inline-flex items-center gap-2 mt-6 bg-[#00a651] hover:bg-[#008f45] text-white px-6 py-3 rounded-full font-semibold uppercase transition "
              >
                Learn more
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
