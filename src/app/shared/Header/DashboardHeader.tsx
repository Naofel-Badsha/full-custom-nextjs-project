'use client'
import React from 'react'

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardHeader = ({ open, setOpen }: Props) => {
  return (
    <div className="h-16 bg-gray-300 flex items-center px-6 shadow">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl mr-4 cursor-pointer"
      >
        ☰
      </button>
      <h1>Dashboard Header</h1>
      </div>
  )
}

export default DashboardHeader