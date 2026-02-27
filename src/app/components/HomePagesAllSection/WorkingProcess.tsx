import Image from "next/image";

const WorkingProcess = () => {
  return (
    <section className="py-[100px] bg-[#EAF3EA]">
      <div className="max-w-7xl mx-auto">
        {/*------------Content-----------*/}
        <div className="space-y-5">
          <div className="w-fit py-1.5 px-4 shadow-md bg-white rounded-full text-[#01A04C] border-[1px] border-gray-200 font-medium m-auto">
            Working Process
          </div>
          <h2 className="text-[#1d1d1d] font-semibold text-[42px] capitalize leading-13 text-center mt-5">
            Easy Step of Working Procces.
          </h2>
          <p className="text-[18px] font-light text-[#6d6d6d] text-center w-[600px] m-auto">
            Sagittis mi eros purus commodo himenaeos ac. Primis ligula ligula
            ultricies lacinia interdum etiam proin. Blandit fames finibus
            consequat luctus.
          </p>
        </div>

        {/*------------------Box----card----------*/}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {/*-------card-----1-------*/}
          <div className="shadow p-5 border-gray-200 bg-white rounded-2xl group">
            <div className="bg-[#00863F] pt-7 pl-7 pr-7 pb-17 rounded-2xl">
              <Image
                src="/assets/process-1.webp"
                alt="WorkProsses"
                width={500}
                height={500}
                className="w-full h-[250px] object-cover rounded-2xl"
              ></Image>
            </div>

            <div className="bg-[#00A34D] rounded-full p-6 w-[90px] h-[90px] flex items-center justify-center m-auto -mt-10 group-hover:scale-110 duration-500">
              <span className="bg-[#FFFFFF] p-3 text-4xl text-[#00863F] rounded-full  font-semibold">
                01
              </span>
            </div>

            <h3 className="text-[24px] font-semibold text-center mt-8">
              Choose Insurance
            </h3>
            <p className="text-[18px] font-light text-center mt-4 mb-2">
              Class commodo quam praesent phasellus ornare. Praesent senectus
              nullam curabitur torquent duis id. Quam quis consequat amet.
            </p>
          </div>
          {/*-------card-----2-------*/}
          <div className="shadow p-5 border-gray-200 bg-white rounded-2xl group">
            <div className="bg-[#00863F] pt-7 pl-7 pr-7 pb-17 rounded-2xl">
              <Image
                src="/assets/process-2.webp"
                alt="WorkProsses"
                width={500}
                height={500}
                className="w-full h-[250px] object-cover rounded-2xl"
              ></Image>
            </div>

            <div className="bg-[#00A34D] rounded-full p-6 w-[90px] h-[90px] flex items-center justify-center m-auto -mt-10 group-hover:scale-110 duration-500">
              <span className="bg-[#FFFFFF] p-3 text-4xl text-[#00863F] rounded-full  font-semibold">
                02
              </span>
            </div>

            <h3 className="text-[24px] font-semibold text-center mt-8">
              Meet with Agent
            </h3>
            <p className="text-[18px] font-light text-center mt-4 mb-2">
              Nunc dolor praesent nisl morbi ligula blandit vel et eleifend. Sit
              mus leo duis euismod imperdiet. Augue sagittis tempor eu, cras
              facilisi.
            </p>
          </div>
          {/*-------card-----3-------*/}
          <div className="shadow p-5 border-gray-200 bg-white rounded-2xl group">
            <div className="bg-[#00863F] pt-7 pl-7 pr-7 pb-17 rounded-2xl">
              <Image
                src="/assets/process-3.webp"
                alt="WorkProsses"
                width={500}
                height={500}
                className="w-full h-[250px] object-cover rounded-2xl"
              ></Image>
            </div>

            <div className="bg-[#00A34D] rounded-full p-6 w-[90px] h-[90px] flex items-center justify-center m-auto -mt-10 group-hover:scale-110 duration-500">
              <span className="bg-[#FFFFFF] p-3 text-4xl text-[#00863F] rounded-full  font-semibold">
                03
              </span>
            </div>

            <h3 className="text-[24px] font-semibold text-center mt-8">
              Start Your Policy
            </h3>
            <p className="text-[18px] font-light text-center mt-4 mb-2">
              Natoque ex suspendisse nostra fames ultricies arcu. Sagittis nisi
              neque vitae litora viverra sodales. Augue viverra dis maximus
              adipiscing cursus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
