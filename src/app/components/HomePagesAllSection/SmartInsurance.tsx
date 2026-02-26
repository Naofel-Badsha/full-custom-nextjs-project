import { ArrowUpRightIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";

const SmartInsurance = () => {
  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto">
        {/*------------Banner-------------*/}
        <div className="flex items-center justify-center">
          {/*---------Main Container with Diamond Pattern/Gradient---------*/}
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
                Smart Insurance
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
                <p className="text-[18px] leading-relaxed">
                  Nostra dignissim magna justo dictum primis; mauris diam.
                  Natoque ex suspendisse nostra fames.
                </p>

                <ul className="space-y-4 pt-4">
                  <li className="flex items-start gap-3">
                    <CheckBadgeIcon className="w-5 h-5 mt-0.5 text-white" />
                    <span className="text-[18px]">
                      Lorem cubilia auctor tristique habitasse.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckBadgeIcon className="w-5 h-5 mt-0.5 text-white" />
                    <span className="text-[18px]">
                      Tristique etiam inceptos tempus quis a nascetur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckBadgeIcon className="w-5 h-5 mt-0.5 text-white" />
                    <span className="text-[18px]">
                      Blandit class malesuada dapibus vestibulum.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/*----------Right Sidebar Card----------*/}
            <div className="w-full bg-[#222222] p-6 m-4 md:mr-8 md:my-8 rounded-2xl flex flex-col z-20">
              {/* Agent Header */}
              <div className="bg-[#00a352] p-4 rounded-xl flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <Image
                    src="/assets/Hero-1.webp"
                    width={500}
                    height={500}
                    alt="Agent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-bold leading-tight">
                  Talk to Our <br /> Agent
                </span>
              </div>

              <p className="text-gray-400 text-xs mb-8">
                Placerat dictum etiam augue massa, ornare ridiculus finibus
                semper consequat.
              </p>

              {/* Download Items */}
              <div className="space-y-4">
                {[
                  { title: "Download PDF", sub: "Affordable premiums" },
                  { title: "Download PDF", sub: "Term life insurance" },
                  { title: "Download PDF", sub: "Comprehensive auto" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-gray-600 rounded-lg group-hover:border-green-500 transition-colors">
                        <BiDownload className="w-5 h-5 text-gray-300" />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">
                          {item.title}
                        </h4>
                        <p className="text-gray-500 text-[10px]">{item.sub}</p>
                      </div>
                    </div>
                    <div className="bg-[#00a352] p-2 rounded-full">
                      <ArrowUpRightIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartInsurance;
