"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Siderbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Agents", path: "/dashboard/agents" },
    { name: "Claims", path: "/dashboard/claims" },
    { name: "Payments", path: "/dashboard/payments" },
    { name: "Policies", path: "/dashboard/policies" },
    { name: "Customers", path: "/dashboard/customers" },
    { name: "Reports", path: "/dashboard/reports" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white p-4 min-h-screen">
      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`block px-4 py-2 rounded-md transition ${
                pathname === item.path ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/*-------------Dropdown---------*/}
        <li>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            <div className="flex items-center justify-between">All Dropdown <span className="border-[1px] p-2 w-[20px] h-[20px] flex items-center justify-center rounded-full cursor-pointer ">v</span></div>
          </button>

          {openMenu && (
            <ul className="ml-4 mt-2 space-y-2">
              <li>
                <Link
                  href="/dashboard/reports/sales"
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  Sales
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/reports/analytics"
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  Analytics
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Siderbar;
