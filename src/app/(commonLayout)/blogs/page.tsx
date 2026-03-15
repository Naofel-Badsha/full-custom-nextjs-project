import AllBlogs from '@/app/components/BlogsPageAllSection/AllBlogs'
import BlogBanner from '@/app/components/BlogsPageAllSection/BlogBanner'
import React from 'react'

const BlogsPage = () => {
  return (
    <div>
      <BlogBanner />
      <AllBlogs />
    </div>
  )
}

export default BlogsPage