import Image from "next/image";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What types of insurance do you offer?",
    answer: "We offer health, life, car, home, and business insurance.",
  },
  {
    question: "How can I get a quote for insurance?",
    answer: "You can get a quote through our website or by contacting support.",
  },
  {
    question: "What factors affect my insurance premium?",
    answer: "Factors include age, location, coverage type, and claim history.",
  },
  {
    question: "How do I file an insurance claim?",
    answer: "You can file a claim via our website, app, or customer service.",
  },
  {
    question: "How long does it take to process a claim?",
    answer: "Most claims are processed within 7–14 business days.",
  },
  {
    question: "Can I cancel my insurance policy anytime?",
    answer: "Yes, but terms and conditions may apply.",
  },
  {
    question: "What is covered under health insurance?",
    answer: "It covers hospitalization, doctor visits, and medicines.",
  },
  {
    question: "Do you offer customizable insurance plans?",
    answer: "Yes, plans can be customized based on your needs.",
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we use strong security measures to protect your data.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via phone, email, or live chat.",
  },
];
//faq-question-.webp
const AllFaqs = () => {
  return (
    <section className="py-[100px] bg-white px-6">
      <div className="space-y-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          <div className="flex-1">
            <Image
              src="/assets/faq-question-.webp"
              alt="Insurance Team"
              width={500}
              height={500}
              className="object-cover w-full h-[500px] lg:h-[800px] rounded-2xl shadow p-3"
            />
          </div>

          <div className="flex-1 space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-arrow bg-base-100 border border-base-300 "
              >
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">
                  {faq.question}
                </div>
                <div className="collapse-content text-sm">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFaqs;
