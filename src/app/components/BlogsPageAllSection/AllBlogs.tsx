import { Blog } from "@/app/types/blog";
import React from "react";

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch("https://dev.to/api/articles", {
    next: { revalidate: 60 },
  });
  return res.json();
}

const AllBlogs = async () => {
  const blogs: Blog[] = await getBlogs();

  return (
    <section className="py-[100px] bg-[#EAF3EA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-5 rounded-xl shadow border-[1px] border-gray-200"
            >
              <h2 className="">{blog.title}</h2>
              <p className="">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
