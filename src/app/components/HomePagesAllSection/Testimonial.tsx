import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="py-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          {/*------------Content-----------*/}
          <div className="space-y-5 flex-1">
            <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium">
              Testimonial
            </div>
            <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13 mt-5">
              Read our success story to find the happiness.
            </h2>
            <p className="text-[18px] font-light text-[#6d6d6d] w-[600px]">
              Quisque montes porta accumsan sodales aptent imperdiet mauris dui.
              Cubilia magna elit in senectus sed metus imperdiet torquent.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/review-1.webp"
                alt="Team Member"
                width={500}
                height={500}
                className="w-full h-[90px] object-cover shadow p-3 rounded border-[1px] border-gray-200"
              ></Image>
              <Image
                src="/assets/review-2.webp"
                alt="Team Member"
                width={500}
                height={500}
                className="w-full h-[90px] object-cover shadow p-3 rounded border-[1px] border-gray-200"
              ></Image>
            </div>
          </div>

          {/*------------Slider-----------*/}
          <div className="flex-1">
            <div className="bg-[#e6f7ee] p-6 rounded-2xl border space-y-5">
              <div className="group-hover:scale-110 duration-500">
                <div className="bg-[#FFFFFF] p-4 text-4xl text-[#00863F] rounded-full  font-semibold shadow w-fit border">
                  <FaQuoteLeft />
                </div>
              </div>
              <p className="text-[#1d1d1d] text-[19px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                beatae expedita totam recusandae earum unde nulla hic sint
                maiores veniam.
              </p>
              <div className="flex gap-2 items-center">
                <div className="">
                  <Image
                    src="/assets/client-1.webp"
                    alt="Team Member"
                    width={500}
                    height={500}
                    className="w-[60px] h-[60px] object-cover shadow rounded-full border-[1px] border-gray-200"
                  ></Image>
                </div>
                <div className="">
                    <h4 className="text-[17px] text-[#1d1d1d] font-medium">Carryn Zenith</h4>
                    <p className="text-[14px] text-green-500 font-light">Designation</p>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-[#FFC400] text-[14px]"/>
                        <FaStar className="text-[#FFC400] text-[14px]"/>
                        <FaStar className="text-[#FFC400] text-[14px]"/>
                        <FaStar className="text-[#FFC400] text-[14px]"/>
                        <FaStar className="text-[#FFC400] text-[14px]"/>
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

export default Testimonial;
