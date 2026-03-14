"use client";
import { FaEye, FaSearch } from "react-icons/fa";
import { LiaFilterSolid } from "react-icons/lia";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { PiExport } from "react-icons/pi";

import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  //--------Search-------Filter-------
  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase()),
  );

  //---------pagination----------
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="bg-white p-5 rounded-xl shadow-md mt-6 border-[1px] border-gray-200">
      <div className="flex items-center justify-between gap-5">
        <h2 className="text-[20px] text-black font-bold">All Users</h2>
        <div className="flex items-center gap-3">
          <button className="text-[15px] px-3 py-1 rounded-sm text-gray-800 border-[1px] border-gray-300 hover:border-gray-400 flex items-center justify-center gap-2">
            <PiExport /> Exports
          </button>
          <button className="text-[15px] px-3 py-1 rounded-sm text-white bg-gray-900 hover:bg-gray-700 border-[1px] border-gray-300 hover:border-gray-400 flex items-center justify-center gap-2">
            <MdAdd /> Add User
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 mt-5">
        {/*----------Search--------*/}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users...."
          className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button className="text-[15px] px-3 py-1 rounded-sm text-gray-800 border-[1px] border-gray-300 hover:border-gray-400 flex items-center justify-center gap-2">
          <LiaFilterSolid /> Filters
        </button>
      </div>

      <div className="mt-10">
        {/*---------Table--------*/}
        <table className="w-full border-gray-200">
          <thead className="bg-gray-100">
            <tr className="border-[1px] border-gray-100">
              <th className="p-2 ">Name</th>
              <th className="p-2 ">Email</th>
              <th className="p-2 ">Phone</th>
              <th className="p-2 ">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="text-center border-[1px] border-gray-100">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.phone}</td>

                <td className="p-3 space-x-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                    onClick={() => setSelectedUser(user)}
                  >
                   <FaEye />
                  </button>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    <MdEdit />
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*----------Pagination-----------*/}
        <div className="flex gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* View Modal */}

        {selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white p-6 rounded w-96">
              <h2 className="text-xl font-bold mb-4">User Details</h2>

              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedUser.phone}
              </p>
              <p>
                <strong>Website:</strong> {selectedUser.website}
              </p>

              <button
                className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
