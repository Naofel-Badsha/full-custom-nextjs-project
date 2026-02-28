import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFile, FaUser } from 'react-icons/fa'

interface StydysTypes {
    id: string,
    image: string,
    name: string,
    description: string,
    tagname: string,
    company: string

}

const studys: StydysTypes[] = [
    {
        id: '1',
        image: '/assets/home.webp',
        name: 'Home & Property Insurance',
        description: 'Our motor insurance covers accident damage, theft, fire, and third-party liability. We offer quick claim processing, affordable premiums, and reliable roadside support to keep your vehicle protected at all times.',
        tagname: 'Family',
        company: 'HomeShield Protection Ltd.'
    },
    {
        id: '2',
        image: '/assets/helth.webp',
        name: 'Health Insurance Protection',
        description: 'We provide comprehensive health insurance coverage including hospitalization, surgery costs, emergency treatment, and medical checkups. Our flexible plans ensure financial protection and peace of mind for you and your family.',
        tagname: 'Health',
        company: 'SecureLife Insurance Ltd.'
    },
    {
        id: '3',
        image: '/assets/motor.webp',
        name: 'Motor & Vehicle Insurance',
        description: 'Our motor insurance covers accident damage, theft, fire, and third-party liability. We offer quick claim processing, affordable premiums, and reliable roadside support to keep your vehicle protected at all times.',
        tagname: 'Motor',
        company: 'SafeDrive Assurance Company'
    },
    {
        id: '4',
        image: '/assets/life.webp',
        name: 'Life Insurance Coverage',
        description: 'Our life insurance plans provide long-term financial security for your loved ones. We offer term life, whole life, and savings-based policies designed to support your family’s future stability.',
        tagname: 'Life',
        company: 'FutureCare Life Insurance'
    },
    {
        id: '5',
        image: '/assets/travel.webp',
        name: 'Travel Insurance Plan',
        description: 'Travel confidently with our comprehensive travel insurance. We cover medical emergencies, trip cancellations, lost baggage, and flight delays, ensuring a safe and stress-free journey anywhere in the world.',
        tagname: 'Travel',
        company: 'GlobalTravel Secure Co.'
    },
    {
        id: '6',
        image: '/assets/business.webp',
        name: 'Business & Liability Insurance',
        description: 'We protect businesses from financial risks including property damage, employee claims, legal liabilities, and unexpected losses. Our customized insurance solutions help your company operate safely and confidently.',
        tagname: 'Business',
        company: 'PrimeGuard Business Insurance'
    },
]

const CaseStudy = () => {
    return (
        <section className="py-[100px] bg-[#EAF3EA]">
            <div className="max-w-7xl mx-auto">
                {/*------------Content-----------*/}
                <div className="space-y-5">
                    <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium m-auto">
                        Case Study
                    </div>
                    <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13 text-center mt-5">
                        Our Effective Insurence Services <br /> & Solutions.
                    </h2>
                    <p className="text-[18px] font-light text-[#6d6d6d] text-center w-[600px] m-auto">
                        Tortor ligula pulvinar finibus primis eget tristique.
                    </p>
                </div>
                {/*--------------Card---------*/}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {
                        studys.map((study) => (
                            // {/*----------Card------1--------*/ }
                            < div key={study.id} className="shadow bg-white rounded-2xl" >
                                <div className="bg-[#00863F] p-7 rounded-2xl">
                                    <Image
                                        src={study.image}
                                        alt="WorkProsses"
                                        width={500}
                                        height={500}
                                        className="w-full h-[250px] object-cover rounded-2xl"
                                    ></Image>
                                </div>
                                <div className="pl-6 pr-6 pb-7">
                                    <div className="flex items-center gap-4 mt-8">
                                        <div className="flex items-center gap-1.5">
                                            <div className="bg-[#00a63e] w-[30px] h-[30px] rounded-full p-2 flex items-center justify-center">
                                                <FaUser className='text-white text-[16px]' />
                                            </div>
                                            <p className="text-[#1d1d1d] text-[14px]">Name Company</p>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="bg-[#00a63e] w-[30px] h-[30px] rounded-full p-2 flex items-center justify-center">
                                                <FaFile className='text-white text-[16px]' />
                                            </div>
                                            <p className="text-[#1d1d1d] text-[14px]">Travel</p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <h2 className="font-medium text-[27px] text-[#1d1d1d]">Business Insurance</h2>
                                        <p className="font-light text-[18px] text-[#6d6d6d] mt-2">Lacinia habitant auctor aenean et inceptos tincidunt blandit. Est faucibus a faucibus; facilisis finibus turpis…</p>
                                    </div>

                                    <div className="flex items-center ">
                                        <Link
                                            href="our-team"
                                            className="inline-flex items-center gap-2 mt-6 bg-[#00a651] hover:bg-[#008f45] text-white px-6 py-3 rounded-full font-semibold uppercase transition "
                                        >
                                            See More Details
                                            <span>↗</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    )
}

export default CaseStudy