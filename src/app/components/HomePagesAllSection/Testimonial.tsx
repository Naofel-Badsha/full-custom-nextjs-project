"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import CountUp from "../Recharts/CountUp";

interface starsTypes {
  id: number;
  icon: React.ReactNode;
}

interface testimonialTypes {
  id: string;
  name: string;
  position: string;
  content: string;
  image: string;
  stars: starsTypes[];
}

const testimonials: testimonialTypes[] = [
  {
    id: "1",
    name: "James Walker",
    position: "Marketing Manager",
    content:
      "Preo delivered our WordPress website on time with excellent design quality. Communication was clear, revisions were handled quickly, and overall experience was professional and smooth.",
    image: "/assets/client-1.webp",
    stars: [
      { id: 1, icon: <FaStar /> },
      { id: 2, icon: <FaStar /> },
      { id: 3, icon: <FaStar /> },
      { id: 4, icon: <FaStar /> },
    ],
  },
  {
    id: "2",
    name: "Sarah Thompson",
    position: "Business Owner",
    content:
      "Working with Preo was fantastic. He understood requirements perfectly, improved website performance, and created a responsive design that truly represents our brand identity.",
    image: "/assets/client-1.webp",
    stars: [
      { id: 1, icon: <FaStar /> },
      { id: 2, icon: <FaStar /> },
      { id: 3, icon: <FaStar /> },
      { id: 4, icon: <FaStar /> },
    ],
  },
  {
    id: "3",
    name: "Daniel Roberts",
    position: "E-commerce Manager",
    content:
      "Preo customized our WooCommerce store efficiently. Wishlist integration and product layout were perfectly executed. His technical skills and support exceeded our expectations.",
    image: "/assets/client-1.webp",
    stars: [
      { id: 1, icon: <FaStar /> },
      { id: 2, icon: <FaStar /> },
      { id: 3, icon: <FaStar /> },
      { id: 4, icon: <FaStar /> },
    ],
  },
  {
    id: "4",
    name: "Emily Carter",
    position: "Project Coordinator",
    content:
      "Preo migrated our website to a new theme without affecting SEO. Everything worked smoothly, and he maintained strong communication throughout the entire process.",
    image: "/assets/client-1.webp",
    stars: [
      { id: 1, icon: <FaStar /> },
      { id: 2, icon: <FaStar /> },
      { id: 3, icon: <FaStar /> },
      { id: 4, icon: <FaStar /> },
    ],
  },
  {
    id: "5",
    name: "Michael Brown",
    position: "Startup Founder",
    content:
      "Preo is highly skilled in Elementor and Next.js basics. He delivered a clean, fast website and provided helpful suggestions for better user experience.",
    image: "/assets/client-1.webp",
    stars: [
      { id: 1, icon: <FaStar /> },
      { id: 2, icon: <FaStar /> },
      { id: 3, icon: <FaStar /> },
      { id: 4, icon: <FaStar /> },
    ],
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 lg:py-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/*------------ Content Section -----------*/}
          <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
            <div className="w-fit mx-auto lg:mx-0 py-1.5 px-4 shadow-sm bg-white rounded-full text-[#01A04C] border border-gray-200 font-medium">
              Testimonial
            </div>
            <h2 className="text-[#1d1d1d] font-bold text-2xl md:text-3xl lg:text-[42px] leading-tight capitalize">
              Read our success story <br className="hidden lg:block" /> to find the happiness.
            </h2>
            <p className="text-base lg:text-lg font-light text-[#6d6d6d] max-w-lg mx-auto lg:mx-0">
              Quisque montes porta accumsan sodales aptent imperdiet mauris dui.
              Cubilia magna elit in senectus sed metus imperdiet torquent.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              {/* এখানে ছবিগুলোর সাইজ রেসপনসিভ করা হয়েছে */}
              <div className="flex flex-row gap-10 -space-x-4">
                <Image src="/assets/review-1.webp" alt="Review" width={120} height={40} className="w-full object-contain bg-white p-1 rounded border shadow-sm" />
                <Image src="/assets/review-2.webp" alt="Review" width={120} height={40} className="w-full object-contain bg-white p-1 rounded border shadow-sm" />
              </div>
            </div>
          </div>

          {/*------------ Slider Section -----------*/}
          <div className="w-full lg:w-1/2 min-w-0"> {/* min-w-0 Swiper এর জন্য জরুরি */}
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, ]}
              className="mySwiper w-full"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="pb-10">
                  <div className="bg-[#e6f7ee] p-6 md:p-8 rounded-2xl shadow-sm space-y-6 w-full">
                    <div className="bg-white p-4 text-3xl text-[#00863F] rounded-full shadow-sm w-fit border border-emerald-100">
                      <FaQuoteLeft />
                    </div>

                    <p className="text-[#1d1d1d] text-lg md:text-xl leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="flex gap-4 items-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="w-14 h-14 object-cover shadow rounded-full border-2 border-white"
                      />
                      <div>
                        <h4 className="text-lg text-[#1d1d1d] font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-green-600 font-medium">
                          {testimonial.position}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          {testimonial.stars.map((star) => (
                            <span className="text-[#FFC400] text-xs" key={star.id}>
                              {star.icon}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="pt-16 mt-10 border-t border-gray-200">
          <CountUp />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
