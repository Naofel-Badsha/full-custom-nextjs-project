import { FaArrowsToCircle } from "react-icons/fa6";
import { Barchart } from "../Recharts/Barchart";
import { FaBusinessTime, FaCarCrash, FaHome } from "react-icons/fa";
import { GiLifeBar } from "react-icons/gi";
import { AiOutlinePropertySafety } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";

interface insurancesTypes {
  id: string;
  insurancesName: string;
  icon: React.ReactNode;
}

const insurancesLists: insurancesTypes[] = [
  {
    id: "1",
    insurancesName: "Life Insurance",
    icon: <GiLifeBar />,
  },
  {
    id: "2",
    insurancesName: "Home Insurance",
    icon: <FaHome />,
  },
  {
    id: "3",
    insurancesName: "Car Insurance",
    icon: <FaCarCrash />,
  },
  {
    id: "4",
    insurancesName: "Business Insurance",
    icon: <FaBusinessTime />,
  },
  {
    id: "5",
    insurancesName: "Property Insurance",
    icon: <AiOutlinePropertySafety />,
  },
  {
    id: "6",
    insurancesName: "Travel Insurance",
    icon: <MdOutlineTravelExplore />,
  },
];

const CostCalculate = () => {
  return (
    <section className="py-[100px] bg-[#EAF3EA]">
      <div className="max-w-7xl mx-auto">
        {/*------------Content-----------*/}
        <div className="space-y-5">
          <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium m-auto">
            Cost Calculate
          </div>
          <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13 text-center mt-5">
            Be part of you to guarantee your <br /> future.
          </h2>
          <p className="text-[18px] font-light text-[#6d6d6d] text-center w-[600px] m-auto">
            Sagittis mi eros purus commodo himenaeos ac. Primis ligula ligula
            ultricies lacinia interdum etiam proin. Blandit fames finibus
            consequat luctus.
          </p>

          <div className="flex gap-3 items-center bg-[#00A34D] rounded-xl p-4 hover:bg-[#1d1d1d] duration-500 group w-fit m-auto mt-6">
            <div className="group-hover:scale-110 duration-500">
              <div className="bg-[#FFFFFF] p-4 text-4xl text-[#00863F] rounded-full  font-semibold">
                <FaArrowsToCircle />
              </div>
            </div>
            <div className=" space-y-1.5">
              <h2 className="text-[#eee] text-[24px] font-semibold">
                Report 2023
              </h2>
              <p className="text-[#e6e6e6] text-[18px] font-light">
                Annual insurance list
              </p>
            </div>
          </div>
        </div>

        {/*------------------Charts------------*/}
        <div className="mt-12">
          <Barchart />
        </div>

        <div className="flex items-center justify-center flex-wrap gap-4 mt-5">
          {insurancesLists.map((insurancesList) => (
            <div key={insurancesList.id} className="flex items-center gap-1.5">
              <div className="bg-[#00a63e] w-[30px] h-[30px] rounded-full p-2 flex items-center justify-center">
                <span className="text-white text-[16px]">
                  {insurancesList.icon}
                </span>
              </div>
              <p className="text-[#1d1d1d] text-[14px]">
                {insurancesList.insurancesName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostCalculate;
