import Wellcome from "@/app/components/DashboardCompo/AllBox/Wellcome";
import Incress from "@/app/components/DashboardCompo/AllBox/Incress";
import ChannelRevenue from "@/app/components/DashboardCompo/AllBox/ChannelRevenue";
import TotalProfit from "@/app/components/DashboardCompo/AllBox/TotalProfit";
import SalesReport from "@/app/components/DashboardCompo/AllBox/SalesReport";
import TasksOverview from "@/app/components/DashboardCompo/AllBox/TasksOverview";
import UsersReview from "@/app/components/DashboardCompo/AllBox/UsersReview";

const DashboardPage = () => {
  return (
    <div>
      <Wellcome />
      <Incress />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <TotalProfit />
        <ChannelRevenue />
      </div>
      <SalesReport />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <UsersReview />
        <TasksOverview />
      </div>
    </div>
  );
};

export default DashboardPage;
