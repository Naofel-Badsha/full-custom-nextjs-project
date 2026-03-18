import Image from "next/image";
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
        image: "/assets/cl-1.webp",
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
        image: "/assets/cl-2.webp",
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
        image: "/assets/cl-3.webp",
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
        image: "/assets/cl-4.webp",
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
        image: "/assets/cl-5.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "6",
        name: "Olivia Martinez",
        position: "Brand Manager",
        content:
            "Preo transformed our outdated website into a modern, user-friendly platform. His attention to detail and responsiveness made the whole process seamless.",
        image: "/assets/cl-6.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "7",
        name: "David Wilson",
        position: "Operations Manager",
        content:
            "Great experience working with Preo. He delivered exactly what we needed and ensured everything worked perfectly across all devices.",
        image: "/assets/cl-7.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "8",
        name: "Sophia Lee",
        position: "Creative Director",
        content:
            "Preo has a strong sense of design and usability. He improved our website layout and made it visually appealing and easy to navigate.",
        image: "/assets/cl-8.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "9",
        name: "Chris Evans",
        position: "Entrepreneur",
        content:
            "The website Preo built for us is fast, responsive, and well-optimized. He communicated clearly and delivered everything on time.",
        image: "/assets/cl-9.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "10",
        name: "Emma Johnson",
        position: "Marketing Specialist",
        content:
            "Preo understands client needs very well. He provided smart suggestions that improved both design and functionality of our website.",
        image: "/assets/cl-10.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "11",
        name: "Ryan Clark",
        position: "Business Consultant",
        content:
            "Professional, reliable, and skilled. Preo handled our project efficiently and delivered a high-quality website that meets our expectations.",
        image: "/assets/cl-11.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "12",
        name: "Ava Taylor",
        position: "Startup Owner",
        content:
            "I really appreciated Preo’s communication and dedication. He made sure every detail was perfect before delivery.",
        image: "/assets/cl-12.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "13",
        name: "Liam Anderson",
        position: "Product Manager",
        content:
            "Preo delivered a clean and scalable website. His coding and design skills are impressive, and he was easy to work with.",
        image: "/assets/cl-13.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "14",
        name: "Mia White",
        position: "Content Strategist",
        content:
            "The website looks amazing and performs great. Preo ensured everything was optimized for both users and search engines.",
        image: "/assets/cl-14.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "15",
        name: "Noah Harris",
        position: "Agency Owner",
        content:
            "Preo is dependable and skilled. He handled our client project smoothly and delivered results that exceeded expectations.",
        image: "/assets/cl-15.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "16",
        name: "Isabella Scott",
        position: "UI/UX Designer",
        content:
            "Working with Preo was easy and efficient. He implemented design ideas perfectly and improved overall user experience.",
        image: "/assets/cl-16.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "17",
        name: "Ethan King",
        position: "Tech Lead",
        content:
            "Preo has solid technical knowledge. He solved issues quickly and delivered a stable, high-performing website.",
        image: "/assets/cl-17.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    },
    {
        id: "18",
        name: "Charlotte Green",
        position: "Small Business Owner",
        content:
            "Excellent service from start to finish. Preo built a professional website that truly represents my business.",
        image: "/assets/cl-18.webp",
        stars: [
            { id: 1, icon: <FaStar /> },
            { id: 2, icon: <FaStar /> },
            { id: 3, icon: <FaStar /> },
            { id: 4, icon: <FaStar /> },
        ],
    }
];


const AllTestimonials = () => {
    return (
        <section className='py-[100px] '>
            <div className="max-w-7xl mx-auto">
                <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id}>
                            <div className="bg-[#e6f7ee] p-6 rounded-2xl shadow space-y-5 w-full">
                                <div className="group-hover:scale-110 duration-500">
                                    <div className="bg-[#FFFFFF] p-4 text-2xl text-[#00863F] rounded-full  font-semibold shadow w-fit border">
                                        <FaQuoteLeft />
                                    </div>
                                </div>
                                <p className="text-[#1d1d1d] text-[16px]">
                                    {testimonial.content}
                                </p>
                                <div className="flex gap-2 items-center">
                                    <div className="">
                                        <Image
                                            src={testimonial.image}
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AllTestimonials