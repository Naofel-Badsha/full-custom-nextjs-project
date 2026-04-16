import Image from "next/image";
import Link from "next/link";

import React from "react";
import {
  FaCalculator,
  FaDownload,
  FaPhone,
  FaPlayCircle,
  FaSearch,
} from "react-icons/fa";
// import {
//   Search,
//   FileText,
//   Activity,
//   Car,
//   Home,
//   LifeBuoy,
//   Plane,
//   Download,
//   Calculator,
//   PlayCircle,
//   Phone,
// } from "lucide-react";

export interface GuideCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ResourceLink {
  id: number;
  title: string;
  type: "PDF" | "Link" | "Video";
  url: string;
}

const guideCards: GuideCard[] = [
  {
    id: 1,
    title: "Health Insurance",
    description: "How to choose the right plan for your family?",
    icon: "🏥",
  },
  {
    id: 2,
    title: "Auto Insurance",
    description: "Step-by-step guide to filing a car claim.",
    icon: "🚗",
  },
  {
    id: 3,
    title: "Home Insurance",
    description: "Protecting your assets and property guide.",
    icon: "🏠",
  },
  {
    id: 4,
    title: "Claims Center",
    description: "Rules and documents for fast submission.",
    icon: "📄",
  },
  {
    id: 5,
    title: "Life Insurance",
    description: "Planning for the future with the right policy.",
    icon: "👨‍👩‍👧",
  },
  {
    id: 6,
    title: "Travel Insurance",
    description: "What you need to know before flying.",
    icon: "✈️",
  },
];

const resources: ResourceLink[] = [
  { id: 1, title: "Download Claim Form", type: "PDF", url: "#" },
  { id: 2, title: "Use Premium Calculator", type: "Link", url: "#" },
  {
    id: 3,
    title: "How Life Insurance Works (2 min video)",
    type: "Video",
    url: "#",
  },
];

const GuidesPage = () => {
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
                href="/contactus"
                className="text-xl font-medium text-white hover:text-green-500 uppercase"
              >
                Our Contactus
              </Link>
            </div>

            <h1 className="text-[42px] font-bold leading-12 mb-8 text-center mt-3 uppercase">
              OUR ALL Guides
            </h1>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-[#EAF3EA] text-[#1D1D1D] font-sans">
        {/* 1. Hero Section */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#005224] mb-6">
              Insurance Knowledge Hub
            </h1>
            <p className="text-lg text-[#019A49] mb-8">
              Simplified guides to help you protect what matters most.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for topics (e.g. Term Life, Home Claim)..."
                className="w-full p-4 pl-12 rounded-full border border-blue-200 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <FaSearch
                className="absolute left-4 top-4 text-gray-400"
                size={24}
              />
            </div>
          </div>
        </section>

        {/* 2. Topic Grid */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-600 pl-3">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideCards.map((card) => (
              <div
                key={card.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#019A49] transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {card.description}
                </p>
                <span className="text-[#019A49] font-medium text-sm inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 pb-20">
          {/* 3. Featured Article */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8 border-l-4 border-[#019A49] pl-3">
              Featured Article
            </h2>
            <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="md:w-1/2">
                <Image
                  src="/assets/ca-3.webp"
                  alt="Family"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  5 Things You Must Know Before Buying Insurance in 2026
                </h3>
                <p className="text-gray-600 mb-6 italic">
                  Stay updated with the latest policy changes and market trends.
                </p>
                <button className="bg-[#019A49] text-white px-6 py-2 rounded-lg w-fit hover:bg-[#0a6e39] transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* 4. Resource Library */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-8 border-l-4 border-[#019A49] pl-3">
              Resource Library
            </h2>
            <div className="space-y-4">
              {resources.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all group shadow-sm"
                >
                  <div className="p-3 bg-blue-50 rounded-lg mr-4 text-[#019A49]">
                    {item.type === "PDF" && <FaDownload size={20} />}
                    {item.type === "Link" && <FaCalculator size={20} />}
                    {item.type === "Video" && <FaPlayCircle size={20} />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#019A49] block">
                      {item.type}
                    </span>
                    <span className="text-[15px] font-semibold text-gray-800 group-hover:text-[#019A49]">
                      {item.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
