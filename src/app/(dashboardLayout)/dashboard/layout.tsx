"use client";
import DashboardHeader from "@/app/shared/Header/DashboardHeader";
import Siderbar from "@/app/shared/Sidebar/Siderbar";
import React, { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  
  return (
    <div>
      <div className="flex h-screen">
        {/*---------Sidebar--------*/}
        <div className={`bg-slate-900 text-white transition-all duration-300 ${
          open ? "w-64" : "w-0 overflow-hidden"
        }`}>
          <Siderbar />
        </div>

        <div className="flex flex-col flex-1">
          <DashboardHeader  open={open} setOpen={setOpen}/>
          <main className="flex-1 p-6 overflow-y-auto bg-amber-400">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
