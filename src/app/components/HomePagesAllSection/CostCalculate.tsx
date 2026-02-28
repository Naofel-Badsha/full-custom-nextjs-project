import { FaArrowsToCircle } from "react-icons/fa6"
import { Barchart } from "../Recharts/Barchart"



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
                        Sagittis mi eros purus commodo himenaeos ac. Primis ligula ligula ultricies lacinia interdum etiam proin. Blandit fames finibus consequat luctus.
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
            </div>
        </section>
    )
}

export default CostCalculate