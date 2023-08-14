import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="hade">
        <div className="left-hade">
          <img className="logo" src="./assets/blog.png" alt="logo" />
          <h3>Blogger</h3>
        </div>
        <h5>Create BLOG</h5>
      </div>
      <div className="header-text">
        <h2>Embark on a Journey to Ignite Your Imagination</h2>
        <p>
          Join us as we venture into uncharted territories
          <br /> nurturing inspiration and fanning the flames of your
          imagination."
        </p>
      </div>
    </header>
  );
};

export default Header;
