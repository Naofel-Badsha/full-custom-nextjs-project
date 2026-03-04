import React from 'react'
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
  {
  id: '6',
  name: 'Olivia Bennett',
  podobi: 'Insurance Expert',
  image: '/assets/team-6.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
},
{
  id: '7',
  name: 'Daniel Carter',
  podobi: 'Insurance Expert',
  image: '/assets/team-7.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
},
{
  id: '8',
  name: 'Sophia Mitchell',
  podobi: 'Insurance Expert',
  image: '/assets/team-8.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
},
{
  id: '9',
  name: 'Ethan Rodriguez',
  podobi: 'Insurance Expert',
  image: '/assets/team-9.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
},
{
  id: '10',
  name: 'Ava Thompson',
  podobi: 'Insurance Expert',
  image: '/assets/team-10.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
},
{
  id: '11',
  name: 'Liam Anderson',
  podobi: 'Insurance Expert',
  image: '/assets/team-11.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
},
{
  id: '12',
  name: 'Mia Robinson',
  podobi: 'Insurance Expert',
  image: '/assets/team-12.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
},
{
  id: '13',
  name: 'Noah Martinez',
  podobi: 'Insurance Expert',
  image: '/assets/team-13.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
},
{
  id: '14',
  name: 'Isabella Clark',
  podobi: 'Insurance Expert',
  image: '/assets/team-14.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
},
{
  id: '15',
  name: 'Lucas Hernandez',
  podobi: 'Insurance Expert',
  image: '/assets/team-15.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
},
{
  id: '16',
  name: 'Charlotte Lewis',
  podobi: 'Insurance Expert',
  image: '/assets/team-16.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
},
{
  id: '17',
  name: 'Benjamin Scott',
  podobi: 'Insurance Expert',
  image: '/assets/team-17.webp',
  socials: [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaTiktok />, link: 'https://tiktok.com/' },
  ]
}
]

const AllTeamMenber = () => {
  return (
    <div>AllTeamMenber</div>
  )
}

export default AllTeamMenber