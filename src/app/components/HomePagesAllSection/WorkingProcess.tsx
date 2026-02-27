import Image from "next/image"


const WorkingProcess = () => {
    return (
        <section className="py-[100px] bg-[#EAF3EA]">
            <div className="max-w-7xl mx-auto">
                {/*------------Content-----------*/}
                <div className="space-y-5">
                    <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium m-auto">
                        Working Process
                    </div>
                    <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13 text-center mt-5">
                        Highlighting services or <br /> insurance plans.
                    </h2>
                    <p className="text-[18px] font-light text-[#6d6d6d] text-center w-[600px] m-auto">
                        Sagittis mi eros purus commodo himenaeos ac. Primis ligula ligula
                        ultricies lacinia interdum etiam proin. Blandit fames finibus
                        consequat luctus.
                    </p>
                </div>

                {/*------------------Box----card----------*/}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-16">
                    {/*-------card-----1-------*/}
                    <div className="">
                        <div className="bg-[#00863F] p-10 rounded-2xl">
                            <Image src="/assets/process-1.webp"
                            alt=""
                            width={500}
                            height={500}
                            className="w-full h-[250px] object-cover rounded-2xl"
                            ></Image>
                        </div>
                        <div className="bg-[#00A34D] rounded-full p-3 w-fit">
                            <span className="bg-[#FFFFFF] p-4 text-4xl text-[#00863F] rounded-full font-semibold">01</span>
                        </div>
                        <h3 className="">Choose Insurance</h3>
                        <p className="">Class commodo quam praesent phasellus ornare. Praesent senectus nullam curabitur torquent duis id. Quam quis consequat amet.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkingProcess