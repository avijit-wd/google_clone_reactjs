import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/about">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/about">Gmail</Link>
          <Link to="/about">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://soda.la.psu.edu/images/google-logo"
          alt="google logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
