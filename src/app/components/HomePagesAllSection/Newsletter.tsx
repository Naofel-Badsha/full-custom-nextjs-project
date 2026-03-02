import React from "react";

const Newsletter = () => {
  return (
    <section className="">
      <div
        className="relative w-full overflow-hidden bg-cover bg-center px-8 py-25 text-white"
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
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium">
              Newsletter
            </div>
            <h1 className="text-left text-[42px] font-semibold leading-tight md:text-5xl lg:text-6xl drop-shadow-lg">
              Get Daily Insurance News.
            </h1>
            <p className="text-left text-[18px] text-[#eee] font-light">
              Commodo sagittis finibus consequat facilisis nibh vel.
            </p>
          </div>
          {/*-------------Form Section----------------*/}
          <div className="">
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              <input
                type="email"
                placeholder="Email Here"
                className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-700 outline-none placeholder:text-gray-400 text-lg shadow-sm"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#00A843] hover:bg-[#008f39] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 uppercase tracking-wide group"
              >
                Subscribe
                <span className="text-xl">↗</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
