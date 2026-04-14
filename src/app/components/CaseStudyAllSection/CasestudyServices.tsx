import React from 'react'
interface CardData {
  id: number;
  category: string;
  title: string;
  image: string;
}

const insuranceCards: CardData[] = [
  {
    id: 1,
    category: "Life Insurance",
    title: "Building Long Term Financial Security for the Family",
    image: "/assets/ca-1.webp", // আপনার ইমেজের পাথ দিন
  },
  {
    id: 2,
    category: "Business Insurance",
    title: "Protecting Growth & Stability for a Local Retail Business",
    image: "/assets/ca-2.webp",
  },
  {
    id: 3,
    category: "Retirement & Savings Plans",
    title: "Strategic Retirement Planning for a Senior Executive",
    image: "/assets/ca-3.webp",
  },
  {
    id: 4,
    category: "Claims Support",
    title: "Providing Timely Financial Relief Through Efficient Claim",
    image: "/assets/ca-4.webp",
  },
  {
    id: 5,
    category: "Life Insurance",
    title: "Ensuring Income Continuity for a Single Parent Household",
    image: "/assets/ca-5.webp",
  },
  {
    id: 6,
    category: "Investment Plans",
    title: "Creating Stable Post Retirement Income Strategy",
    image: "/assets/ca-6.webp",
  },
];
const CasestudyServices = () => {
  return (
    <div>CasestudyServices</div>
  )
}

export default CasestudyServices