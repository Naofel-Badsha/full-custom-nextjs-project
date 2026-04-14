"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiPoliceBadgeLine } from "react-icons/ri";
// types/case-study.ts
export interface CaseStudyDetails {
  title: string;
  projectInfo: {
    label: string;
    value: string;
  }[];
  challenges: {
    title: string;
    desc: string;
    icon: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const CaseStadyDetailsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(4); // default open 5th one (index 4)

  const projectInfo = [
    { label: "Project Name:", value: "Building Long..." },
    { label: "Category:", value: "Life Insurance" },
    { label: "Policy Type:", value: "Term Life Insurance" },
    { label: "Country:", value: "New Jersey" },
    { label: "Total Members:", value: "04" },
  ];

  const faqs = [
    {
      question: "How do I choose the right insurance plan?",
      answer:
        "Choosing the right insurance starts with understanding your needs...",
    },
    {
      question: "What types of insurance plans do you offer?",
      answer: "We offer life, business, and health insurance...",
    },
    {
      question: "Can I make changes to my policy after purchase?",
      answer: "Yes, you can update your coverage anytime...",
    },
    {
      question: "Do you provide insurance for small businesses?",
      answer: "Absolutely, we have tailored plans for retail and SMEs.",
    },
    {
      question: "How long does it take to process a claim?",
      answer:
        "Choosing the right insurance plan starts with understanding your personal needs, financial goals, and level of risk. Consider factors such as your income, family responsibilities, and existing financial commitments.",
    },
  ];
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
                Our contactus
              </Link>
            </div>

            <h1 className="text-[42px] font-bold leading-12 mb-8 text-center mt-3 uppercase">
              Case Study Details
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-gray-800">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* --- LEFT SIDEBAR --- */}
            <aside className="lg:w-1/3 space-y-8">
              {/* Info Card */}
              <div className="bg-[#019a49]/5 rounded-2xl overflow-hidden">
                <div className="bg-[#019a49] p-4 text-white font-bold">
                  Case Study Information
                </div>
                <div className="p-6 space-y-4">
                  {projectInfo.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between border-b border-[#019a49] pb-2 text-sm"
                    >
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-gray-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="relative rounded-2xl overflow-hidden h-64 flex items-center p-8 text-white group cursor-pointer">
                <div className="absolute inset-0 bg-[#019a49] z-10" />
                <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover group-hover:scale-105 transition-transform" />
                <div className="relative z-20">
                  <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Have questions about our insurance? Get personalized
                    guidance.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg">
                      <FaPhone className="text-[#019a49]"/>{" "}
                    </div>
                    <span className="font-bold">+123 456 - 789</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* --- RIGHT CONTENT AREA --- */}
            <main className="lg:w-2/3">
              <Image
                src="/assets/ca-1.webp"
                alt="Insurance Team"
                width={300}
                height={300}
                className="object-cover w-full rounded-2xl shadow p-3"
              />

              <p className="text-gray-600 mb-8 leading-relaxed mt-8">
                The Williams family consisted of two working parents in their
                early 30s... (Your detail text here)
              </p>

              <h2 className="text-3xl font-bold mb-6">Projects challenges</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="flex gap-4 p-4 border rounded-xl">
                  <div className="bg-[#019a49] p-3 h-fit rounded-lg text-[#019a49]">
                    <RiPoliceBadgeLine className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Balancing Protection</h4>
                    <p className="text-sm text-gray-500">
                      Designing a comprehensive life insurance plan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border rounded-xl">
                  <div className="bg-[#019a49] p-3 h-fit rounded-lg text-[#019a49]">
                    <IoSettings className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Smart Protection</h4>
                    <p className="text-sm text-gray-500">
                      The family's existing coverage was insufficient.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section (Accordion) */}
              <h2 className="text-3xl font-bold mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className={`w-full flex justify-between cursor-pointer items-center p-5 text-left font-semibold transition-colors ${openFaq === idx ? "bg-[#0E2A1D] text-white" : "bg-gray-50"}`}
                    >
                      <span>{`Q${idx + 1}. ${faq.question}`}</span>
                      <span>{openFaq === idx ? "−" : "+"}</span>
                    </button>
                    {openFaq === idx && (
                      <div
                        className={`p-5 text-sm leading-relaxed ${openFaq === idx ? "bg-[#0E2A1D] text-gray-300" : ""}`}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStadyDetailsPage;
