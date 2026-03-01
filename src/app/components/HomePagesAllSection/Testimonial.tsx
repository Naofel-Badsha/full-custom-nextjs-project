"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

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
    <section className="py-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/*------------Content-----------*/}
          <div className="space-y-5">
            <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium">
              Testimonial
            </div>
            <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13 mt-5">
              Read our success story to find the happiness.
            </h2>
            <p className="text-[18px] font-light text-[#6d6d6d] w-[600px]">
              Quisque montes porta accumsan sodales aptent imperdiet mauris dui.
              Cubilia magna elit in senectus sed metus imperdiet torquent.
            </p>
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src="/assets/review-1.webp"
                  alt="Team Member"
                  width={500}
                  height={500}
                  className="w-full h-[90px] object-cover shadow rounded border-[1px] border-gray-200"
                ></Image>
              </div>
              <div>
                <Image
                  src="/assets/review-2.webp"
                  alt="Team Member"
                  width={500}
                  height={500}
                  className="w-full h-[90px] object-cover shadow rounded border-[1px] border-gray-200"
                ></Image>
              </div>
            </div>
          </div>

          {/*------------Slider-----------*/}
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#e6f7ee] p-6 rounded-2xl border space-y-5 w-full">
                  <div className="group-hover:scale-110 duration-500">
                    <div className="bg-[#FFFFFF] p-4 text-4xl text-[#00863F] rounded-full  font-semibold shadow w-fit border">
                      <FaQuoteLeft />
                    </div>
                  </div>
                  <p className="text-[#1d1d1d] text-[19px]">
                    {testimonial.content}
                  </p>
                  <div className="flex gap-2 items-center">
                    <div className="">
                      <Image
                        src="/assets/client-1.webp"
                        alt="Team Member"
                        width={500}
                        height={500}
                        className="w-[60px] h-[60px] object-cover shadow rounded-full border-[1px] border-gray-200"
                      ></Image>
                    </div>
                    <div className="">
                      <h4 className="text-[17px] text-[#1d1d1d] font-medium">
                        {testimonial.name}
                      </h4>
                      <p className="text-[14px] text-green-500 font-light">
                        {testimonial.position}
                      </p>
                      <div className="flex items-center gap-1">
                        {testimonial.stars.map((star) => (
                          <span
                            className="text-[#FFC400] text-[14px]"
                            key={star.id}
                          >
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
    </section>
  );
};

export default Testimonial;
