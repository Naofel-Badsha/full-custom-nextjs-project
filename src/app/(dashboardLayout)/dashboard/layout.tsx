"use client";
import DashboardHeader from "@/app/shared/Header/DashboardHeader";
import Siderbar from "@/app/shared/Sidebar/Siderbar";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  //-----Sidebar menu k difult vabea dakatea --useEffect use korea hoyse....
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen relative">
      {/*--------Overlay------(mobile)----------*/}
      {/* Overlay (mobile) */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
        />
      )}

      {/*----------Sidebar-------------*/}
      <div
        className={` fixed md:static z-50 h-full bg-slate-900 text-white transition-all duration-300 w-64 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:ranslate-x-0 ${open ? "md:w-64" : "md:w-0 md:overflow-hidden"}`}
      >
        <Siderbar setMobileOpen={setMobileOpen} />
      </div>

      {/*----------Right-----Side------------*/}
      <div className="flex flex-col flex-1">
        <DashboardHeader
          open={open}
          setOpen={setOpen}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        <main className="flex-1 p-6 overflow-y-auto bg-amber-400">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
