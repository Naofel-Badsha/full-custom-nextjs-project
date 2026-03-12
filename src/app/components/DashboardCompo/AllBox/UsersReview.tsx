"use client";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknown",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },

  {
    name: "55-59",
    uv: 3.45,
    pv: 3500,
    fill: "#ff8042",
  },
  {
    name: "60-64",
    uv: 2.98,
    pv: 2900,
    fill: "#ffbb28",
  },
  {
    name: "65-69",
    uv: 1.87,
    pv: 2100,
    fill: "#00c49f",
  },
  {
    name: "70-74",
    uv: 1.25,
    pv: 1600,
    fill: "#ff6666",
  },
  {
    name: "75+",
    uv: 0.95,
    pv: 1200,
    fill: "#a28bff",
  },
];

const UsersReview = () => {
  return (
    <div className="col-span-1 bg-white p-5 rounded-xl shadow-md mt-6 border-[1px] border-gray-200">
      <h2 className="text-[20px] text-black font-bold">Users Review</h2>
      <div className="">
        <RadialBarChart
          style={{ width: "100%", height: "80vh",  }}
          responsive
          barSize={14}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="uv"
          />
          {/* <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          /> */}
          <Tooltip />
          <RechartsDevtools />
        </RadialBarChart>
      </div>
    </div>
  );
};

export default UsersReview;
