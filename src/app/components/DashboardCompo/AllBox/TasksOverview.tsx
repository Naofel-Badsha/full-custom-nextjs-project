"use client";
import {
  Pie,
  PieChart,
  PieLabelRenderProps,
  PieSectorShapeProps,
  Sector,
  Tooltip,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const data = [
  { name: "Group A", value: 900 },
  { name: "Group B", value: 800 },
  { name: "Group C", value: 700 },
  { name: "Group D", value: 600 },
  { name: "Group E", value: 500 },
  { name: "Group F", value: 400 },
  { name: "Group G", value: 300 },
];
const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > ncx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

const MyCustomPie = (props: PieSectorShapeProps) => {
  return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
};

const TasksOverview = () => {
  return (
    <div className="col-span-1 bg-white p-5 rounded-xl shadow-md mt-6 border-[1px] border-gray-200">
     <h2 className="text-[20px] text-black font-bold">Everyday Tasks Overview</h2>
      <div className="mt-5">
        <PieChart
          style={{
            width: "100%",
            height: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
            <Tooltip />
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="value"
            shape={MyCustomPie}
          />
          <RechartsDevtools />
        </PieChart>
      </div>
    </div>
  );
};

export default TasksOverview;
