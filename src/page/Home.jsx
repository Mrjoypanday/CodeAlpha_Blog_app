import React, { useState } from "react";
import Header from "../component/Header/Header";
import Search from "../component/Header/SearchBar/Search";
import BlogList from "./../component/Header/BlogList/BlogList";
import { blogList } from "../config/data";
import Footer from "../component/Footer/Footer";
import Empty from "../component/Empty";
const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [search, setSearch] = useState("");

  const hendelSearchSubmit = (event) => {
    event.preventDefault();
    henselSearchRuselts();
  };
  const henselSearchRuselts = () => {
    const allBlogs = blogList;
    const filterBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(search.toLowerCase().trim())
    );
    setBlogs(filterBlogs);
  };
  const hendelClearSearch = () => {
    setBlogs(blogList);
    setSearch("");
  };
  return (
    <>
      <div className="container">
        {/* header component */}
        <Header />
        <Search
          value={search}
          clearSearch={hendelClearSearch}
          fromSubmit={hendelSearchSubmit}
          heandelsearch={(e) => setSearch(e.target.value)}
        />
        {!blogs.length ? <Empty /> : <BlogList blogs={blogs} />}
        <Footer />
      </div>
    </>
  );
};

export default Home;
