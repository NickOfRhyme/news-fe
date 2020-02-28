import React from "react";
import { Link } from "@reach/router";
import TopicNav from "./TopicNav";

const Header = props => {
  return (
    <header>
      <h1>
        <Link to="/">Breaking News</Link>
      </h1>
      <TopicNav />
    </header>
  );
};

export default Header;
