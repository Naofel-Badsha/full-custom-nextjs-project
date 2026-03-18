"use client";

import { Blog } from "@/app/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { useEffect, useState } from "react";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  console.log(search)
  //---------fetch blogs-------
  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch("https://dev.to/api/articles");
      const data = await res.json()
      setBlogs(data);
    };
    getBlogs();
  }, []);

  //--------filter blogs-------
  const blogFilter = blogs.filter((blog) =>
    blog.title?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="py-[100px] bg-[#EAF3EA]">
      <div className="max-w-7xl mx-auto">
        <h1>Total Blog: {blogs.length}</h1>
        {/* -------Search-----blog---------*/}
        <div className="flex bg-white py-3 px-5 shadow w-[700px] m-auto rounded-md">
          <input type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search blog...?"
            className="py-2 px-4 rounded-md bg-[#EAF3EA] w-full border-0 outline-0" />
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {blogFilter.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-5 rounded-xl shadow border-[1px] border-gray-200 space-y-3"
            >
              {/*----Blog----Cover---Images----*/}
              <Image
                src={blog.cover_image || "/assets/blog-1.webp"}
                alt={blog.title}
                width={500}
                height={500}
                className="rounded-xl w-full h-[200px] object-cover"
              />

              {/*--------Details------*/}
              <h2 className="text-[20px]">{blog.title.slice(0, 40)}..</h2>
              <p className="text-[15px]">{blog.description.slice(1, 120)}...</p>
              <div className="flex items-center justify-between gap-2 mt-5">
                <div className="flex items-center gap-2">
                  <Image
                    src={blog.user?.profile_image ?? "/user.png"}
                    alt={blog.user?.name ?? "Author"}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <p className="text-sm">{blog.user?.name ?? "Unknown Author"}</p>
                </div>

                <div className="flex items-center gap-2">
                  <FaCalendar />
                  <p className="text-[14px]">{blog.readable_publish_date}</p>
                </div>
              </div>
              {/*--------button-------*/}
              <div className="flex items-center w-full pb-3">
                <Link
                  href={`/blogs/${blog.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 mt-6 bg-[#00a651] hover:bg-[#008f45] text-white px-6 py-2 rounded-full font-medium uppercase transition "
                >
                  See More Details
                  <span>↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
