import Image from "next/image";
import React from "react";

const Wellcome = () => {
  return (
    <div className="flex gap-5 items-center justify-between bg-white shadow-md border-[1px] border-gray-200 p-5 rounded-xl">
      <div className="">
        <h1 className="text-3xl font-semibold">Hello Badsha</h1>
        <p className="text-[16px] font-normal text-gray-800 mt-3">
          Welcome to your Insurance Dashboard. Manage policies, track claims,
          monitor payments, and view customer insights efficiently in one
          secure, centralized place.
        </p>
      </div>
      <div className="">
        <Image
          src="/assets/ds-1.webp"
          alt=""
          width={300}
          height={300}
          className="object-cover w-full"
        ></Image>
      </div>
    </div>
  );
};

export default Wellcome;
