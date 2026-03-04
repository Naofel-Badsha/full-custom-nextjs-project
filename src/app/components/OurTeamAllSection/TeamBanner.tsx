import React from "react";

const TeamBanner = () => {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto">
        {/*------------Banner-------------*/}
        <div className="flex items-center justify-center">
          <div
            className="relative w-full  bg-[#006b33] rounded-3xl overflow-hidden flex flex-col lg:flex-row"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #008445 0%, #006b33 100%)`,
            }}
          >
            {/*--------Decorative Diamond Overlay (Subtle)----------*/}
            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')`,
              }}
            ></div>

            {/*--------Left Content Area---------*/}
            <div className="w-full p-8 md:p-16 z-10 text-white">
              <span className="bg-white text-[#00a352] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">
                Our Team Banner
              </span>

              <h1 className="text-[42px] font-bold leading-12 mb-8">
                Apply For Your Life Insurance.
              </h1>
            </div>

            {/*----------Middal Card----------*/}
            <div className="w-full m-4 md:mr-8 md:my-8">
              {/* Agent Header */}
              <div className="max-w-md space-y-6 text-[#e6e6e6]">
                <p className="text-[18px] leading-relaxed">
                  Proin ultricies vel urna pulvinar pulvinar. Morbi condimentum
                  dolor vel tellus laoreet, eu auctor erat sodales suspendisse
                  dictum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBanner;
