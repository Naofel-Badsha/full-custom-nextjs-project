import React from 'react'

interface NewsAndBlogsTypes {
    id: string,
    title: string,
    content: string,
    image: string,
    date: string,
    author: string

}

const newsAndBlogs = [
  {
    id: "1",
    title: "The Small Business Owner’s Guide to Contractor Liability Insurance",
    content: "HOME SINGLE BLOG The Small Business Owner’s Guide to Contractor Liability Insurance. Hendrik Morella 2024/08/06 Property Habitasse…",
    image: "/assets/client-1.webp",
    date: "12/02/2026",
    author: "James Smith"
  },
  {
    id: "2",
    title: "Top 10 Business Insurance Policies Every Startup Needs",
    content: "HOME SINGLE BLOG Top 10 Business Insurance Policies Every Startup Needs. Learn how to protect your startup from unexpected risks and liabilities…",
    image: "/assets/client-2.webp",
    date: "15/02/2026",
    author: "Emily Johnson"
  },
  {
    id: "3",
    title: "How General Liability Insurance Protects Your Company",
    content: "HOME SINGLE BLOG How General Liability Insurance Protects Your Company. Discover why liability coverage is essential for growing businesses…",
    image: "/assets/client-3.webp",
    date: "18/02/2026",
    author: "Michael Brown"
  },
  {
    id: "4",
    title: "Understanding Workers’ Compensation Insurance",
    content: "HOME SINGLE BLOG Understanding Workers’ Compensation Insurance. A complete breakdown of employee coverage and legal requirements…",
    image: "/assets/client-4.webp",
    date: "20/02/2026",
    author: "Sophia Williams"
  },
  {
    id: "5",
    title: "Professional Liability vs General Liability: What’s the Difference?",
    content: "HOME SINGLE BLOG Professional Liability vs General Liability: What’s the Difference? Compare coverage types and choose the right policy…",
    image: "/assets/client-5.webp",
    date: "25/02/2026",
    author: "Daniel Martinez"
  },
  {
    id: "6",
    title: "5 Common Insurance Mistakes Small Business Owners Make",
    content: "HOME SINGLE BLOG 5 Common Insurance Mistakes Small Business Owners Make. Avoid costly errors by understanding your insurance needs…",
    image: "/assets/client-6.webp",
    date: "28/02/2026",
    author: "Olivia Anderson"
  }
];

const NewsAndBlog = () => {
    return (
        <section className="py-[100px]">
            <div className="max-w-7xl mx-auto">
                {/*------------Content-----------*/}
                <div className="space-y-5">
                    <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium m-auto">
                        News & Blog
                    </div>
                    <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13 text-center mt-5">
                        Get the latest updates & <br /> information from our experts.
                    </h2>
                    <p className="text-[18px] font-light text-[#6d6d6d] text-center w-[600px] m-auto">
                        Magnis litora leo parturient integer neque at imperdiet litora.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default NewsAndBlog