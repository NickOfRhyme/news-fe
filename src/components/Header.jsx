import React, { useContext } from "react";
import { Link } from "@reach/router";
import { UserContext } from "./contexts/UserContext";
import TopicNav from "./TopicNav";

const Header = (props) => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <div>
        <h1>
          <Link to="/">Breaking News</Link>
        </h1>
        <p className="logInMessage">
          Logged in as <Link to="/login">{user}</Link>
        </p>
      </div>
      <TopicNav />
    </header>
  );
};

export default Header;
