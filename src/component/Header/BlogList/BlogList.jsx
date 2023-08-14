import React from "react";
import BlogItem from "./BlogItem/BlogItem";
import "./Blog.css";
const BlogList = ({ blogs }) => {
  return (
    <div className="BlogList-Wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
