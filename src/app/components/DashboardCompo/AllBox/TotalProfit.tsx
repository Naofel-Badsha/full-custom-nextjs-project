"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
const data = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: " March",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: " May",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "July",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "September",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "November",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "December",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const TotalProfit = () => {
  return (
    <div className="col-span-1 bg-white p-5 rounded-xl shadow-md mt-6 border-[1px] border-gray-200">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-[16px] font-normal text-gray-800">Total Profit</p>
          <h2 className="text-[30px] font-semibold text-black">$8,950.00</h2>
        </div>
        <button className="text-[14px] font-normal px-3 py-1.5 border-[1px] rounded-[5px] border-sky-400 text-sky-400 hover:border-sky-700">
          Details
        </button>
      </div>

      <div className="mt-4">
        <AreaChart
          style={{
            width: "100%",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          onContextMenu={(_, e) => e.preventDefault()}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width="auto"  />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <RechartsDevtools />
        </AreaChart>
      </div>
    </div>
  );
};

export default TotalProfit;
