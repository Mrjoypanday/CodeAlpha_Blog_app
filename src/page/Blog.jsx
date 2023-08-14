import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useParams } from "react-router";
import { blogList } from "../config/data";
import Empty from "./../component/Empty";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navication = useNavigate();
const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);
  return (
    <div>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">{blog.category}</div>
          </header>

          <div className="Blog-cat">
            <img src={blog.coverphoto} alt={blog.coverphoto} />
          </div>
          <div className="des">
            <p>{blog.describe}</p>
          </div>
        </div>
      ) : (
        <Empty />
      )}
      <div className="buttons">
        <button onClick={() => navication("/")}>Go Back</button>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
