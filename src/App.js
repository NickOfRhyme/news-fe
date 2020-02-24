import React from "react";
import "./App.css";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import { Router } from "@reach/router";
import TopicPage from "./components/TopicPage";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <>
      <Header />
      <Router>
        <FrontPage path="/" />
        <TopicPage path="/topics/:topic" />
        <ArticlePage path="/topics/:topic/:article_id" />
      </Router>
    </>
  );
}

export default App;
