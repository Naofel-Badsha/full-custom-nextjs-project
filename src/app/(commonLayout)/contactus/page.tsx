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
    icon: <FaPhone />,
  },
  {
    id: 3,
    title: "Location",
    value: "123 Street, New York, USA",
    icon: <FaMapPin />,
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


      {/*----------Contact-------Form----------*/}
      <div className=" bg-gray-50 flex items-center justify-center py-[100px]">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side: Content & Image */}
          <div className="space-y-8">
            <div className="space-y-4">
                <div className="w-fit py-1.5 px-4 shadow bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-normal">
                 Contact Us
                </div>
              <h1 className="text-4xl  font-bold text-slate-900 leading-tight">
                Personalized <span className="text-emerald-600">insurance</span> support and assistance today
              </h1>
              <p className="text-gray-500 text-lg max-w-lg">
                Reach out to our team for tailored insurance solutions, expert advice, and prompt assistance with all your coverage needs.
              </p>
            </div>

            {/* Decorative Card with Image Overlay */}
            <div className="relative rounded-3xl overflow-hidden h-[350px] group shadow-2xl">
              {/* Background Image - Replace with your actual image path */}
              <img
                src="/assets/contact.webp"
                alt="Support Team"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Overlay with Contact Details */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent p-8 flex flex-col justify-center gap-6">
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[#f0f4f4] p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 capitalize">
              Get in <span className="text-emerald-600 underline underline-offset-4 decoration-emerald-200">touch</span> with us
            </h2>
            <p className="text-gray-500 mb-8">Complete the form to start your personalized insurance journey.</p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-4 rounded-xl border-none bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-4 rounded-xl border-none bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border-none bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full p-4 rounded-xl border-none bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm"
              />
              <input
                type="date"
                placeholder="Delect Date"
                className="w-full p-4 rounded-xl border-none bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm"
              />
              <input
                type="text"
                placeholder="Phone No"
                className="w-full p-4 rounded-xl border-none bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-4 rounded-xl border-none bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all md:col-span-2 shadow-sm"
              ></textarea>

              <button className="md:col-span-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] mt-4 shadow-lg shadow-emerald-200">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactUsPage