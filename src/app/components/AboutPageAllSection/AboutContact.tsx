import Image from "next/image";

const AboutContact = () => {
  return (
    <section className="py-[100px] bg-[#044a3a] flex items-center justify-center overflow-hidden ">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
        <div className="relative group">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
            <Image
            width={500}
            height={500}
              src="/assets/aboutCont.webp"
              alt="Insurance Specialist"
              className="w-full h-[400px] md:h-[550px] object-cover"
            />
          </div>

          {/*---------Infinity------Badgh--------*/}
          <div className="absolute bottom-0 right-0 md:-bottom-12 md:-right-5 z-20 w-32 h-32 md:w-44 md:h-44 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <div className="absolute z-10 text-[#008F45] bg-[#008F45]/10 p-3 rounded-full animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>

            {/* SVG টেক্সট যা সবসময় ঘুরবে */}
            <svg
              className="w-full h-full animate-spin-slow"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                />
              </defs>
              <text className="text-[9px] font-semibold uppercase tracking-[2.5px] fill-[#008F45]">
                <textPath xlinkHref="#circlePath">
                  • Contact Now • Contact Now • Contact Now
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/*-----------Tesx--------Content------*/}
        <div className="text-white space-y-8 leading-12 lg:leading-15">
          <h1 className="text-[40px] lg:text-[42px] font-medium">
            What matters most get your free insurance {""}
            <span className="font-bold">
              quote today!
            </span>
          </h1>

          <p className="text-white/80 text-[16px] lg:text-[18px] leading-relaxed max-w-xl">
            Whether it's your home, health, car, or business, we've got you
            covered. Get your free insurance quote today and discover the peace
            of mind that comes with reliable, comprehensive protection tailored
            to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button className="bg-white text-[#008F45] px-10 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg">
              Contact Now
            </button>

            {/*--------------Arrow----------*/}
            <div className="hidden md:block ml-4 animate-bounce">
              <svg
                width="60"
                height="40"
                viewBox="0 0 60 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10C25 10 35 30 50 30"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path d="M45 25L50 30L45 35" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
