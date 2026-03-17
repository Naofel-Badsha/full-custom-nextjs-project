import { Blog } from "@/app/types/blog";
import Image from "next/image";
import {
  FaCalendar,
  FaClock,
  FaComments,
  FaHeart,
} from "react-icons/fa";

interface Props {
  params: {
    id: string;
  };
}

const SingleBlogPage = async ({ params }: Props) => {
  const { id } = params;

  const res = await fetch(`https://dev.to/api/articles/${id}`, {
    next: { revalidate: 60 },
  });

  const data: Blog = await res.json();
  console.log(data);

  // ✅ Destructuring
  const {
    title,
    description,
    cover_image,
    readable_publish_date,
    reading_time_minutes,
    comments_count,
    positive_reactions_count,
    tag_list,
    url,
    user,
  } = data;

  // ✅ User destructuring
  const {
    name: authorName,
    profile_image,
    website_url,
  } = user || {};

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-4xl mx-auto px-5">

        {/* Cover Image */}
        <Image
          src={cover_image || "/assets/blog-1.webp"}
          alt={"civer images"}
          width={800}
          height={500}
          className="rounded-xl w-full h-[400px] object-cover mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold mb-3">{title}</h1>

        {/* Author + Info */}
        <div className="flex flex-wrap items-center gap-5 text-gray-600 mb-5">
          <div className="flex items-center gap-2">
            <Image
              src={profile_image || "/user.png"}
              alt={authorName || "Author"}
              width={30}
              height={30}
              className="rounded-full"
            />
            <p>{authorName || "Unknown Author"}</p>
          </div>

          <div className="flex items-center gap-2">
            <FaCalendar />
            <p>{readable_publish_date}</p>
          </div>

          <div className="flex items-center gap-2">
            <FaClock />
            <p>{reading_time_minutes} min read</p>
          </div>

          <div className="flex items-center gap-2">
            <FaComments />
            <p>{comments_count} comments</p>
          </div>

          <div className="flex items-center gap-2">
            <FaHeart />
            <p>{positive_reactions_count} reactions</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tag_list?.map((tag: string) => (
            <span
              key={tag}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">
          {description}
        </p>


        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href={url}
            target="_blank"
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            View on Dev.to
          </a>

          {website_url && (
            <a
              href={website_url}
              target="_blank"
              className="bg-gray-200 px-5 py-2 rounded-full"
            >
              Author Website
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;