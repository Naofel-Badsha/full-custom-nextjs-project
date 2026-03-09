import DashboardHeader from "@/app/shared/Header/DashboardHeader";
import Siderbar from "@/app/shared/Sidebar/Siderbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex h-screen">
        {/*---------Sidebar--------*/}
        <div className="">
          <Siderbar />
        </div>

        <div className="flex flex-col flex-1">
          <DashboardHeader />
          <main className="flex-1 p-6 overflow-y-auto bg-amber-400">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default layout;
