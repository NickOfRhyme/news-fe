import React from "react";
import "./App.css";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import { Router } from "@reach/router";
import TopicPage from "./components/TopicPage";
import ArticlePage from "./components/ArticlePage";

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
        </Router>
      </>
    );
  }
}

export default App;
