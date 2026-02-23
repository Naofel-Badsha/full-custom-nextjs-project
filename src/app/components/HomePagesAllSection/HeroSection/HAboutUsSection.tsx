import Image from "next/image"


const HAboutUsSection = () => {
    return (
        <section className="py-[100px] bg-white">
            <div className="max-w-7xl mx-auto flex gap-14">
                {/*-----------Left-------Side---------*/}
                <div className="flex-1">
                    <div className="flex gap-8">
                        {/*-------Iamges-----Box----1-------*/}
                        <div className="space-y-8">
                            <Image
                                src="/assets/about-1.webp"
                                alt="Insurance Team"
                                width={300}
                                height={300}
                                className="object-cover w-full rounded-2xl"
                            />
                            <Image
                                src="/assets/about-2.webp"
                                alt="Insurance Team"
                                width={300}
                                height={300}
                                className="object-cover w-full rounded-2xl"
                            />
                        </div>
                        {/*-------Iamges-----Box----2-------*/}
                        <div className="space-y-8 flex items-center">
                            <div className="relative">
                                <Image
                                    src="/assets/about-3.webp"
                                    alt="Insurance Team"
                                    width={300}
                                    height={300}
                                    className="object-cover w-full rounded-2xl "
                                />

                                <div className="absolute top-[250px] w-full">
                                    <Image
                                        src="/assets/about-4.png"
                                        alt="Insurance Team"
                                        width={500}
                                        height={500}
                                        className="object-cover w-[170px] h-[170px] m-auto"
                                    />
                                    <div className="flex items-center justify-center absolute top-[45px] w-full">
                                        <div>
                                            <h4 className="text-center font-bold text-[42px] text-white">24+</h4>
                                            <p className="text-white text-[14px] font-light -mt-3">Years Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*-----------Right-------Side---------*/}
                <div className="flex-1">
                    <div className="">
                      <span className="py-3 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium">About Us</span>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HAboutUsSection