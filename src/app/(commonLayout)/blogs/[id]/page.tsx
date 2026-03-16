import { Blog } from "@/app/types/blog";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

interface Props {
  params: {
    id: string; // URL থেকে ID নেবে
  };
}
const SingleBlogPage = async ({params}: Props) => {
  const {id} = params;

  //-------API থেকে single blog fetch করা------
  const res = await fetch(`https://dev.to/api/articles/${id}`, {
     next: { revalidate: 60 },
  });
  const blog: Blog = await res.json()


  return (
        <section className="py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-5">{blog.title}</h1>

      <div className="mb-5">
        <Image
          src={blog.cover_image ?? "/assets/blog-1.webp"}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-xl w-full h-[400px] object-cover"
        />
      </div>

      {/* <p className="text-lg">{blog.body_markdown}</p> */}

      <div className="flex items-center gap-3 mt-5">
        <Image
          src={blog.user.profile_image ?? "/user.png"}
          alt={blog.user.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <p>{blog.user.name}</p>
        <FaCalendar />
        <p>{blog.readable_publish_date}</p>
      </div>
    </section>
  )
}

export default SingleBlogPage