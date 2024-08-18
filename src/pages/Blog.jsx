import React from "react";
import FeaturedBlogs from "../blog/FeaturedBlogs";
import BlogSlider from '../blog/BlogSlider'

const Blog = () => {
    return (
        <div className="main">
          <FeaturedBlogs/>

          <BlogSlider/>
        </div>
    )
}
export default Blog;