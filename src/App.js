import React from "react";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import { Router } from "@reach/router";
import TopicPage from "./components/TopicPage";
import ArticlePage from "./components/ArticlePage";
import ErrorPage from "./components/ErrorPage";

class App extends React.Component {
  state = {
    user: "jessjelly"
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <Header user={user} />
        <Router>
          <FrontPage path="/" user={user} />
          <TopicPage path="/topics/:topic" user={user} />
          <ArticlePage path="/topics/:topic/:article_id" user={user} />
          <ErrorPage default />
        </Router>
      </>
    );
  }
}

export default App;
