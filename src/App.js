import React from "react";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import { Router } from "@reach/router";
import TopicPage from "./components/TopicPage";
import ArticlePage from "./components/ArticlePage";
import ErrorPage from "./components/ErrorPage";
import UserContext from "./components/contexts/UserContext";

class App extends React.Component {
  render() {
    return (
      <UserContext.Provider value={"jessjelly"}>
        <Header />
        <Router id="mainContent">
          <FrontPage path="/" />
          <TopicPage path="/topics/:topic" />
          <ArticlePage path="/topics/:topic/:article_id" />
          <ErrorPage default />
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
