'use client'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
const data = [
  { name: "Jan", orders: 590, profit: 800, sales: 1400, revenue: 490 },
  { name: "Feb", orders: 868, profit: 967, sales: 1506, revenue: 590 },
  { name: "Mar", orders: 1397, profit: 1098, sales: 989, revenue: 350 },
  { name: "Apr", orders: 1480, profit: 1200, sales: 1228, revenue: 480 },
  { name: "May", orders: 1520, profit: 1108, sales: 1100, revenue: 460 },
  { name: "Jun", orders: 1400, profit: 680, sales: 1700, revenue: 380 },

  { name: "Jul", orders: 1650, profit: 1250, sales: 1320, revenue: 520 },
  { name: "Aug", orders: 1720, profit: 1340, sales: 1480, revenue: 610 },
  { name: "Sep", orders: 1810, profit: 1420, sales: 1550, revenue: 640 },
  { name: "Oct", orders: 1950, profit: 1500, sales: 1620, revenue: 700 },
  { name: "Nov", orders: 2050, profit: 1600, sales: 1700, revenue: 750 },
  { name: "Dec", orders: 2200, profit: 1750, sales: 1850, revenue: 820 },
];
const SalesReport = () => {
  return (
    <div className="col-span-1 bg-white p-4 rounded-xl shadow-md mt-6 border-[1px] border-gray-200">
      <h2 className="text-[20px] text-black font-bold">Sales Report</h2>

      <div className="">
        <ComposedChart
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
            bottom: 0,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis width="auto"  />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="sales" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="profit" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="orders" stroke="#ff7300" />
          <Scatter dataKey="revenue" fill="red" />
          <RechartsDevtools />
        </ComposedChart>
      </div>
    </div>
  );
};

export default SalesReport;
