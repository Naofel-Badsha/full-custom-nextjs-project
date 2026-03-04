import React from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaShare,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

interface SocialLink {
  id: number;
  icon: React.ReactNode;
  link: string;
}

interface TeamMember {
  id: string;
  name: string;
  podobi: string;
  image: string;
  socials: SocialLink[];
}

const teams: TeamMember[] = [
  {
    id: "1",
    name: "Hendrik Morella",
    podobi: "Insurance Expert",
    image: "/assets/team-1.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "2",
    name: "Bryan Walker",
    podobi: "Insurance Expert",
    image: "/assets/team-2.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "3",
    name: "Carryn Zenith",
    podobi: "Insurance Expert",
    image: "/assets/team-3.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "4",
    name: "Paul Moralez",
    podobi: "Insurance Expert",
    image: "/assets/team-4.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "5",
    name: "james Smaits",
    podobi: "Insurance Expert",
    image: "/assets/team-5.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "6",
    name: "Olivia Bennett",
    podobi: "Insurance Expert",
    image: "/assets/team-6.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "7",
    name: "Daniel Carter",
    podobi: "Insurance Expert",
    image: "/assets/team-7.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "8",
    name: "Sophia Mitchell",
    podobi: "Insurance Expert",
    image: "/assets/team-8.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "9",
    name: "Ethan Rodriguez",
    podobi: "Insurance Expert",
    image: "/assets/team-9.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "10",
    name: "Ava Thompson",
    podobi: "Insurance Expert",
    image: "/assets/team-10.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "11",
    name: "Liam Anderson",
    podobi: "Insurance Expert",
    image: "/assets/team-11.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "12",
    name: "Mia Robinson",
    podobi: "Insurance Expert",
    image: "/assets/team-12.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "13",
    name: "Noah Martinez",
    podobi: "Insurance Expert",
    image: "/assets/team-13.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "14",
    name: "Isabella Clark",
    podobi: "Insurance Expert",
    image: "/assets/team-14.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "15",
    name: "Lucas Hernandez",
    podobi: "Insurance Expert",
    image: "/assets/team-15.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "16",
    name: "Charlotte Lewis",
    podobi: "Insurance Expert",
    image: "/assets/team-16.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
  {
    id: "17",
    name: "Benjamin Scott",
    podobi: "Insurance Expert",
    image: "/assets/team-17.webp",
    socials: [
      { id: 1, icon: <FaFacebook />, link: "https://facebook.com" },
      { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
      { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
      { id: 4, icon: <FaTiktok />, link: "https://tiktok.com/" },
    ],
  },
];

const AllTeamMenber = () => {
  return (
    <section>
      <div className="">
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {teams.map((team) => (
            <div key={team.id} className="mt-6 py-5">
              <div className=" rounded-2xl overflow-hidden shadow bg-white border-[1px] border-gray-100">
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
                      <hr className="text-white h-[1px] mt-2 mb-2" />
                      <p className="text-green-200 text-sm">{team.podobi}</p>
                    </div>

                    {/*--------Share-------Social-----------*/}
                    <div className="relative group flex items-center">
                      <div className=" absolute -top-48 right-0 space-y-2 gap-2 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTeamMenber;
