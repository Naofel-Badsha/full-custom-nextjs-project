"use client";
import { Blog } from "@/app/types/blog"
import { useState } from "react";

type Props = {
    blogs: Blog[]
}

const SearchBlog = ({ blogs }: Props) => {
      const [search, setSearch] = useState("");
      console.log(search)

      const blogFilter = blogs.filter((blog) =>
        blog.title?.toLowerCase().includes(search.toLowerCase())
      ) 

    return (
        <div className="flex bg-white py-3 px-5 shadow w-[700px] m-auto rounded-md">
            <h1>All : {blogs.length}</h1>
            <input type="text"
                value={search}
               onChange={(e) => setSearch(e.target.value)}
                placeholder="Search blog...?"
                className="py-2 px-4 rounded-md bg-[#EAF3EA] w-full border-0 outline-0" />
        </div>
    )
}

export default SearchBlog