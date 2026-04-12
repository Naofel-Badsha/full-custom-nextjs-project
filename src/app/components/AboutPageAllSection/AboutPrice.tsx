import { CheckCircleIcon } from "@heroicons/react/24/outline";

const AboutPrice = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: "19",
      features: [
        "Invoices/Estimates",
        "Online Payments",
        "Projects and Time Sheet",
      ],
      isPopular: false,
    },
    {
      name: "Business Plan",
      price: "49",
      features: [
        "Invoices/Estimates",
        "Online Payments",
        "Projects and Time Sheet",
      ],
      isPopular: true,
    },
    {
      name: "Premium Custom Plan",
      price: "89",
      features: [
        "Invoices/Estimates",
        "Online Payments",
        "Projects and Time Sheet",
      ],
      isPopular: false,
    },
  ];
  return (
    <section className="py-[100px] bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-fit m-auto py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium ">
            Pricing Plan
          </div>
          <h2 className="text-[30px] lg:text-[42px] font-bold text-[#033d31] leading-tight mt-4">
            Insurance <span className="text-[#033d31]">pricing plans</span>{" "}
            affordable <br className="hidden md:block" />
            coverage for every budget
          </h2>
        </div>

        {/*---------Pricing Cards Container----------*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 md:p-10 rounded-xl transition-all duration-300 ${
                plan.isPopular
                  ? "bg-[#044a3a] text-white overflow-hidden"
                  : "bg-white border border-gray-100 shadow  text-[#033d31]"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              )}

              {/*-----------Price Tag-------------*/}
              <div className="inline-flex items-baseline bg-[#00a859] text-white px-6 py-3 rounded-2xl mb-8">
                <span className="text-[20px] lg:text-[30px] font-bold">
                  ${plan.price}
                </span>
                <span className="ml-2 text-sm font-medium opacity-90">
                  / Per Month
                </span>
              </div>

              {/*------Plan Name--------*/}
              <h3
                className={`text-xl font-bold mb-8 ${plan.isPopular ? "text-white" : "text-[#033d31]"}`}
              >
                {plan.name}
              </h3>

              {/*---------Features List----------*/}
              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircleIcon
                      className={`w-5 h-5 ${plan.isPopular ? "text-[#00a859]" : "text-[#00a859]"}`}
                    />
                    <span
                      className={`text-sm md:text-base font-medium ${plan.isPopular ? "text-gray-200" : "text-gray-600"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/*----------Bottom Line for Middle Card----------*/}
              {plan.isPopular && (
                <div className="h-[1px] bg-white/10 w-full mb-8"></div>
              )}

              {/*----------Button-----------*/}
              <button
                className={`w-full md:w-auto px-8 py-4 rounded-xl font-bold transition-all ${
                  plan.isPopular
                    ? "bg-[#00a859] hover:bg-[#008f4c] text-white"
                    : "bg-[#00a859] hover:bg-[#008f4c] text-white"
                }`}
              >
                Select Policy
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPrice;
