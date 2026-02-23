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
                    <div className="space-y-5">
                        <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-semibold ">About Us</div>
                        <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13">Provide information about reading insurance, generate leads, policies.</h2>
                        <p className="text-[18px] font-light text-[#6d6d6d]">Proin ultricies vel urna pulvinar pulvinar. Morbi condimentum dolor vel tellus laoreet, eu auctor erat sodales. Suspendisse dictum magna semper maximus lacinia. Pellentesque fringilla et augue aliquam elementum.</p>
                        <p className="text-[18px] font-light text-[#6d6d6d]">Nunc eget quam vel justo aliquam sagittis in sit amet lorem. Donec sem nisi, bibendum sed laoreet in, malesuada quis neque.</p>
                     <div className="bg-[#E6F7EE] p-6 border-l-3 border-[#00863F]">
                       <p className="text-[#1d1d1d] text-[19px] font-semibold ">A house is made of walls and beams; a home is built with love and dreams. Protect both with insurance.</p>
                     </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HAboutUsSection