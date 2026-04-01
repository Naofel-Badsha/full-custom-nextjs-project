import Image from "next/image";
import { FaArrowsToCircle } from "react-icons/fa6";
import { IconType } from "react-icons";


type FeatureItem = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};


const featureData: FeatureItem[] = [
  {
    id: 1,
    title: "Best Quality Services",
    description:
      "Aliquam aliquet curabitur donec metus luctus. Eu blandit elementum montes eget pulvinar platea scelerisque.",
    icon: FaArrowsToCircle,
  },
  {
    id: 2,
    title: "Professional Agent",
    description:
      "Ac pellentesque consequat nullam fermentum interdum. Orci risus vivamus lacus primis tempor proin massa.",
    icon: FaArrowsToCircle,
  },
  {
    id: 3,
    title: "24 Years Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: FaArrowsToCircle,
  },
];

const ProfessionalInsurance = () => {
  return (
    <section className="py-[100px] bg-[#EAF3EA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center flex-col lg:flex-row justify-center gap-10">
          {/*----------Content---------*/}
          <div>
            {/*------------Content-----------*/}
            <div className="space-y-5">
              <div className="w-fit m-auto lg:m-0 py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium">
                Professional Insurance
              </div>
              <h2 className="text-[#1d1d1d] font-semibold text-[30px] lg:text-[42px] capitalize mt-5 text-center lg:text-left">
                The best time to get insurance is before you need it.
              </h2>
              <p className="text-[16px] lg:text-[18px] font-light text-[#6d6d6d] text-center lg:text-left">
                Tortor ligula pulvinar finibus primis eget tristique lacinia
                habitant.
              </p>
            </div>
            {/*-----------Card-------Column--------*/}
            <div className="space-y-6 mt-8">
              {featureData.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="flex gap-3 items-center bg-[#00A34D] rounded-xl p-5 hover:bg-[#1d1d1d] duration-500 group"
                  >
                    <div className="group-hover:scale-110 duration-500">
                      <div className="bg-[#FFFFFF] p-4 text-4xl text-[#00863F] rounded-full font-semibold">
                        <Icon />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h2 className="text-[#eee] text-[24px] font-semibold">
                        {item.title}
                      </h2>
                      <p className="text-[#e6e6e6] text-[18px] font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
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
                className="w-full h-[450px] object-cover rounded-xl shadow p-3 bg-white"
              ></Image>
            </div>

            <div className="space-y-5">
              <Image
                src="/assets/professiona-1.webp"
                alt="Professional Insurance"
                width={500}
                height={500}
                className="w-full h-[200px] object-cover rounded-xl shadow p-3 bg-white"
              ></Image>
              <Image
                src="/assets/professiona-2.webp"
                alt="Professional Insurance"
                width={500}
                height={500}
                className="w-full h-[450px] object-cover rounded-xl shadow p-3 bg-white"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInsurance;
