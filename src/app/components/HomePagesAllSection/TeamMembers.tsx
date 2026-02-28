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
        <div className="mt-12">
          {/*----------Card--------1----------*/}
          <div className="w-[350px] rounded-2xl overflow-hidden shadow-lg bg-white">
            {/* Image Section */}
            <div className="relative">
              <Image
                src="/assets/professiona-2.webp"
                alt="Team Member"
                width={500}
                height={500}
                className="w-full h-[420px] object-cover shadow p-3"
              ></Image>

              {/* Bottom Info Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-green-800 rounded-xl px-6 py-4 flex items-center justify-between">
                {/* Name + Role */}
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Bryan Walker
                  </h3>
                  <p className="text-green-200 text-sm">Insurance Expert</p>
                </div>

                {/* Share + Social */}
                <div className="relative group flex items-center">
                  {/* Social Icons */}
                  <div
                    className=" absolute -top-48 right-0 space-y-2 gap-2 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <Link
                      href="#"
                      className="w-8 h-8 hover:bg-[#00A63E] hover:text-white hover:scale-110 duration-500 bg-white rounded-full flex items-center justify-center text-green-800 text-sm font-bold shadow"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      href="#"
                      className="w-8 h-8 hover:bg-[#00A63E] hover:text-white hover:scale-110 duration-500 bg-white rounded-full flex items-center justify-center text-green-800 text-sm font-bold shadow"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      href="#"
                      className="w-8 h-8 hover:bg-[#00A63E] hover:text-white hover:scale-110 duration-500 bg-white rounded-full flex items-center justify-center text-green-800 text-sm font-bold shadow"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href="#"
                      className="w-8 h-8 hover:bg-[#00A63E] hover:text-white hover:scale-110 duration-500 bg-white rounded-full flex items-center justify-center text-green-800 text-sm font-bold shadow"
                    >
                      <FaTiktok />
                    </Link>
                  </div>

                  {/* Share Button */}
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer relative z-10">

                    <FaShare className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
