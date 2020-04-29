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
        {user ? (
          <p className="logInMessage">
            Logged in as{" "}
            <Link to="/login" state={{ returnAfterLogin: true }}>
              {user}
            </Link>
          </p>
        ) : (
          <p className="logInMessage">
            You are not currently{" "}
            <Link to="/login" state={{ returnAfterLogin: true }}>
              logged in
            </Link>
            .
          </p>
        )}
      </div>
      <TopicNav />
    </header>
  );
};

export default Header;
