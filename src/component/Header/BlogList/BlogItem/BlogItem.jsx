import React from "react";
import "./BlogItem.css";
import Chip from "../../../Chip";
import { Link } from "react-router-dom";
const BlogItem = ({
  blog: { id, title, category, describe, Authorname, AuthorPhoto, coverphoto },
}) => {
  // const navegate = useNavigate();
  return (
    <div className="blogItem-wrap">
      <img src={coverphoto} alt="coverphoto" className="blog-img" />
      <Chip label={category} />
      <Link to={`/blog/${id}`} className="link-blog">
        <h3>{title}</h3>
        <p className="blog-description">{describe}</p>
        <footer>
          <div className="blog-author">
            <img src={AuthorPhoto} alt="authorPhoto" />
            <div>
              <h6>{Authorname}</h6>
              <h6>11/08/2023</h6>
            </div>
          </div>
          <p className="read-more">Read More</p>
        </footer>
      </Link>
    </div>
  );
};

export default BlogItem;
