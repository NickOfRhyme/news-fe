import React from "react";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import { Router } from "@reach/router";
import TopicPage from "./components/TopicPage";
import ArticlePage from "./components/ArticlePage";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./components/LoginPage";
import UserContext from "./components/contexts/UserContext";

class App extends React.Component {
  changeUser = newUser => {
    this.setState({ user: newUser });
  };

  state = {
    user: "Guest",
    changeUser: this.changeUser
  };

  render() {
    return (
      <UserContext.Provider value={{ ...this.state }}>
        <Header />
        <Router id="mainContent">
          <FrontPage path="/" />
          <LoginPage path="/login" />
          <TopicPage path="/topics/:topic" />
          <ArticlePage path="/topics/:topic/:article_id" />
          <ErrorPage default />
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
