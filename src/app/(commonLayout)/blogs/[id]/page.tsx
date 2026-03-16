import { Blog } from "@/app/types/blog";
import Image from "next/image";
import { FaCalendar, FaClock, FaComments, FaHeart } from "react-icons/fa";

interface Props {
  params: {
    id: string; // URL থেকে ID নেবে
  };
}
const SingleBlogPage = async ({ params }: Props) => {
  const { id } = params;

  //-------API থেকে single blog fetch করা------
  const res = await fetch(`https://dev.to/api/articles/${id}`, {
    next: { revalidate: 60 },
  });
  const blog: Blog = await res.json()


  return (
    <section className="py-[100px] bg-[#fff]">
      <div className="max-w-5xl mx-auto px-5">
        {/*----Cover Imag-----*/}
        <div className="mb-8">
          <Image
            src={blog.cover_image ?? "/assets/blog-1.webp"}
            alt={blog.title}
            width={1000}
            height={420}
            className="rounded-xl w-full h-[400px] object-cover shadow-lg"
          />
        </div>

        {/*------Title-----*/}
        <h1 className="text-4xl font-bold mb-3">{blog.title}</h1>

        {/*-------Author & Publish Info------*/}
        <div className="flex flex-wrap items-center gap-5 text-gray-600 mb-5">
          <div className="flex items-center gap-2">
            <Image
              src={blog.user?.profile_image ?? "/user.png"}
              alt={blog.user?.name ?? "Author"}
              width={30}
              height={30}
              className="rounded-full"
            />
            <p>{blog.user?.name ?? "Unknown Author"}</p>
          </div>

          <a
            href={blog.user?.website_url ?? "#"}
            target="_blank"
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded-full hover:bg-gray-300 transition"
          >
            Author Website
          </a>

          <div className="flex items-center gap-2">
            <FaCalendar />
            <p>{blog.readable_publish_date}</p>
          </div>

          <div className="flex items-center gap-2">
            <FaClock />
            <p>{blog.reading_time_minutes} min read</p>
          </div>

          <div className="flex items-center gap-2">
            <FaComments />
            <p>{blog.comments_count} comments</p>
          </div>

          <div className="flex items-center gap-2">
            <FaHeart />
            <p>{blog.positive_reactions_count} reactions</p>
          </div>
        </div>

        {/*--------Tags------*/}
        <div className="flex flex-wrap gap-3 mb-5">
          {blog.tag_list?.map((tag: string) => (
            <span
              key={tag}
              className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          )) ?? null}
        </div>

        {/*--------Description------*/}
        <p className="text-lg mb-5">{blog.description}</p>

        {/*------Body / Markdown-----*/}
        <div className="prose max-w-full mb-8">
          <p>{blog.body_markdown}</p>
        </div>

        {/*------Links------*/}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
          <a
            href={blog.url}
            target="_blank"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            View on Dev.to
          </a>
          {blog.canonical_url && (
            <a
              href={blog.canonical_url}
              target="_blank"
              className="bg-gray-200 text-gray-800 px-5 py-2 rounded-full hover:bg-gray-300 transition"
            >
              Canonical URL
            </a>
          )}
          {blog.user?.website_url && (
            <a
              href={blog.user.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-gray-800 px-5 py-2 rounded-full hover:bg-gray-300 transition"
            >
              Author Website
            </a>
          )}
        </div>

        {/*-------Metadata-------*/}
        <div className="mb-5 text-gray-700">
          <p><strong>Slug:</strong> {blog.slug}</p>
          <p><strong>Path:</strong> {blog.path}</p>
          <p><strong>Language:</strong> {blog.language}</p>
          <p><strong>Subforem ID:</strong> {blog.subforem_id}</p>
          <p><strong>Published Timestamp:</strong> {blog.published_timestamp}</p>
          <p><strong>Created At:</strong> {blog.created_at}</p>
          <p><strong>Edited At:</strong> {blog.edited_at ?? "Not Edited"}</p>
          <p><strong>Crossposted At:</strong> {blog.crossposted_at ?? "None"}</p>
          <p><strong>Last Comment At:</strong> {blog.last_comment_at}</p>
        </div>

        {/*------Flare Tag------*/}
        {blog.flare_tag && (
          <div
            className="inline-block mt-5 px-4 py-1 rounded-full font-medium"
            style={{
              backgroundColor: blog.flare_tag.bg_color_hex,
              color: blog.flare_tag.text_color_hex,
            }}
          >
            {blog.flare_tag.name}
          </div>
        )}
      </div>
    </section>
  )
}

export default SingleBlogPage