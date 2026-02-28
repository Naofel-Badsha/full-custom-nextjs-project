'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, } from 'swiper/modules';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaShare, FaTiktok, FaTwitter } from "react-icons/fa";

interface SocialLink {
  id: number;
  icon: React.ReactNode;
  link: string;
}

interface TeamMember {
  id: string,
  name: string,
  podobi: string,
  image: string
  socials: SocialLink[]
}


const teams: TeamMember[] = [
  {
    id: '1',
    name: 'Hendrik Morella',
    podobi: 'Insurance Expert',
    image: '/assets/team-1.webp',
    socials: [
      { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
      { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
      { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
      { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
    ]
  },
  {
    id: '2',
    name: 'Bryan Walker',
    podobi: 'Insurance Expert',
    image: '/assets/team-2.webp',
    socials: [
      { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
      { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
      { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
      { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
    ]
  },
  {
    id: '3',
    name: 'Carryn Zenith',
    podobi: 'Insurance Expert',
    image: '/assets/team-3.webp',
    socials: [
      { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
      { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
      { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
      { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
    ]
  },
  {
    id: '4',
    name: 'Paul Moralez',
    podobi: 'Insurance Expert',
    image: '/assets/team-4.webp',
    socials: [
      { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
      { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
      { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
      { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
    ]
  },
  {
    id: '5',
    name: 'james Smaits',
    podobi: 'Insurance Expert',
    image: '/assets/team-5.webp',
    socials: [
      { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
      { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
      { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
      { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
    ]
  },
]



const TeamMembers = () => {
  return (
    <section className="py-[100px] bg-[#EAF3EA]">
      <div className="max-w-7xl mx-auto">
        {/*------------Content-----------*/}
        <div className="space-y-5">
          <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium m-auto">
            Team Members
          </div>
          <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13 text-center mt-5">
            Meet The Awesome Team.
          </h2>
          <p className="text-[18px] font-light text-[#6d6d6d] text-center w-[600px] m-auto">
            Tortor ligula pulvinar finibus primis eget tristique.
          </p>
        </div>
        {/*---------Team------Member---------*/}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}

          breakpoints={{
            640: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <div>
            {
              teams.map((team) => (
                <SwiperSlide key={team.id}>
                  <div className="mt-6 py-5">
                    <div className=" rounded-2xl overflow-hidden shadow-lg bg-white">
                      <div className="relative">
                        <Image
                          src={team.image}
                          alt="Team Member"
                          width={500}
                          height={500}
                          className="w-full h-[420px] object-cover shadow p-3"
                        ></Image>
                        <div className="absolute bottom-6 left-6 right-6 bg-green-800 rounded-xl px-6 py-4 flex items-center justify-between">
                          {/*---------Name+Role-------------*/}
                          <div>
                            <h3 className="text-white text-xl font-semibold">
                              {team.name}
                            </h3>
                            <hr className='text-white h-[1px] mt-2 mb-2'/>
                            <p className="text-green-200 text-sm">{team.podobi}</p>
                          </div>

                          {/*--------Share-------Social-----------*/}
                          <div className="relative group flex items-center">
                            <div
                              className=" absolute -top-48 right-0 space-y-2 gap-2 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                            >
                              {team.socials.map((social) => (
                              <Link
                              key={social.id}
                                href={social.link}
                                target="_blank"
                                className="w-8 h-8 hover:bg-[#00A63E] hover:text-white hover:scale-110 duration-500 bg-white rounded-full flex items-center justify-center text-green-800 text-sm font-bold shadow"
                              >
                                {social.icon}
                              </Link>
                              ))}
                            </div>

                            {/*---------Share-------Button----------*/}
                            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer relative z-10">
                              <FaShare className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default TeamMembers;
