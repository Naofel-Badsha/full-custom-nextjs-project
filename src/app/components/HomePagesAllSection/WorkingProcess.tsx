import Image from "next/image";
type ProcessItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  step: string;
};

const processData: ProcessItem[] = [
  {
    id: 1,
    title: "Choose Insurance",
    description:
      "Class commodo quam praesent phasellus ornare. Praesent senectus nullam curabitur torquent duis id. Quam quis consequat amet.",
    image: "/assets/process-1.webp",
    step: "01",
  },
  {
    id: 2,
    title: "Meet with Agent",
    description:
      "Nunc dolor praesent nisl morbi ligula blandit vel et eleifend. Sit mus leo duis euismod imperdiet. Augue sagittis tempor eu, cras facilisi.",
    image: "/assets/process-2.webp",
    step: "02",
  },
  {
    id: 3,
    title: "Start Your Policy",
    description:
      "Natoque ex suspendisse nostra fames ultricies arcu. Sagittis nisi neque vitae litora viverra sodales. Augue viverra dis maximus adipiscing cursus.",
    image: "/assets/process-3.webp",
    step: "03",
  },
];

const WorkingProcess = () => {
  return (
    <section className="py-[100px] ">
      <div className="max-w-7xl mx-auto px-6">
        {/*------------Content-----------*/}
        <div className="space-y-5">
          <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium m-auto">
            Working Process
          </div>
          <h2 className="text-[#1d1d1d] font-semibold text-[30px] lg:text-[42px] capitalize leading-13 text-center mt-5">
            Easy Step of Working Procces.
          </h2>
          <p className="text-[16px] lg:text-[18px] font-light text-[#6d6d6d] text-center w-[600px] m-auto">
            Sagittis mi eros purus commodo himenaeos ac. Primis ligula ligula
            ultricies lacinia interdum etiam proin. Blandit fames finibus
            consequat luctus.
          </p>
        </div>

        {/*------------------Box----card----------*/}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {processData.map((item) => (
            <div
              key={item.id}
              className="shadow p-5 border-gray-200 bg-white rounded-2xl group border"
            >
              <div className="bg-[#00863F] pt-7 pl-7 pr-7 pb-17 rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-[250px] object-cover rounded-2xl"
                />
              </div>

              <div className="bg-[#00A34D] rounded-full p-6 w-[90px] h-[90px] flex items-center justify-center m-auto -mt-10 group-hover:scale-110 duration-500">
                <span className="bg-[#FFFFFF] p-3 text-4xl text-[#00863F] rounded-full font-semibold">
                  {item.step}
                </span>
              </div>

              <h3 className="text-[24px] font-semibold text-center mt-8">
                {item.title}
              </h3>

              <p className="text-[16px] lg:text-[18px] font-light text-center mt-4 mb-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
