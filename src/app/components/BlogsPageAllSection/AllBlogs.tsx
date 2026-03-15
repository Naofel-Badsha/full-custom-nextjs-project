import { Blog } from '@/app/types/blog';
import React from 'react'

async function getBlogs(): Promise<Blog[]> {
   const res = await fetch('https://dev.to/api/articles', {
    next: {revalidate: 60}
   }) 
   return res.json()
   
}


const AllBlogs = async () => {
   const blogs: Blog[] = await getBlogs();


  return (
    <section className=''>
        <h1>All Blogs{blogs.length}</h1>
    </section>
  )
}

export default AllBlogs