import Link from 'next/link'

import { ReactNode } from "react";
import { FaMapPin, FaPhone, FaVoicemail } from 'react-icons/fa';
// Type Define
type ContactItemType = {
  id: number;
  title: string;
  value: string;
  icon: ReactNode;
};

const contactData: ContactItemType[] = [
  {
    id: 1,
    title: "Email",
    value: "support@domain.com",
    icon: <FaVoicemail />,
  },
  {
    id: 2,
    title: "Phone",
    value: "+1 (555) 000-0000",
    icon: <FaPhone/>,
  },
  {
    id: 3,
    title: "Location",
    value: "123 Street, New York, USA",
    icon: <FaMapPin/>,
  },
];

const ContactUsPage = () => {
  return (
    <div>
      <section className="">
        {/*------------Banner-------------*/}
        <div
          className="relative w-full bg-[#006b33] overflow-hidden"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #008445 0%, #006b33 100%)`,
          }}
        >
          {/*--------Decorative Diamond Overlay (Subtle)----------*/}
          <div
            className="absolute inset-0 opacity-35 pointer-events-none"
            style={{
              backgroundImage: `url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')`,
            }}
          ></div>

          {/*--------Left Content Area---------*/}
          <div className="w-full p-10 md:p-24 z-10 text-white">
            <div className="flex items-center justify-center gap-3 ">
              <Link
                href="/"
                className="text-xl font-medium text-green-500 uppercase"
              >
                Home
              </Link>{" "}
              -
              <Link
                href="/testimonial"
                className="text-xl font-medium text-white hover:text-green-500 uppercase"
              >
                Blogs
              </Link>
            </div>

            <h1 className="text-[42px] font-bold leading-12 mb-8 text-center mt-3">
              CONTACT US
            </h1>
          </div>
        </div>
      </section>

      {/* -------Box-------Card---*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-[100px]">
        {contactData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-md border border-gray-200 rounded-xl shadow"
          >
            <div className="text-gray-800 bg-green-500 rounded-full">
              <div className="text-[20px] p-4 text-white">{item.icon}</div>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-800 text-[18px] font-semibold">
                {item.title}:
              </span>
              <span className="text-gray-400 text-lg font-light">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default ContactUsPage