import Link from "next/link";
import React from "react";
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
    <section className="max-w-7xl  mx-auto px-6 py-10">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insuranceCards.map((card: CardData) => (
          <Link href="/case-stady-details">
            <div
              key={card.id}
              className="relative h-[400px] overflow-hidden rounded-2xl group cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              />

              {/* Overlay Gradient (নিচের টেক্সট বুঝার জন্য) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content Area */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#019A49]" />
                  <span className="text-white text-sm font-medium opacity-90">
                    {card.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-[20px] font-medium leading-tight">
                  {card.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CasestudyServices;
