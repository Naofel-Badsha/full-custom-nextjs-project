import { Blog } from "@/app/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaClock, FaUser } from "react-icons/fa";

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
              blog={blog}
              className="bg-white p-5 rounded-xl shadow border-[1px] border-gray-200 space-y-3"
            >
              {/*----Blog----Cover---Images----*/}
              <div className="">
                {blog.cover_image ? (
                  <Image
                    src={blog.cover_image}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="rounded-xl w-full h-[200px] object-cover"
                  />
                ) : (
                  <Image
                    src="/assets/blog-1.webp"
                    alt="placeholder"
                    width={500}
                    height={500}
                    className="rounded-xl w-full h-[200px] object-cover"
                  />
                )}
              </div>

              {/*--------Details------*/}
              <h2 className="text-[20px]">{blog.title.slice(1, 40)}..</h2>
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
