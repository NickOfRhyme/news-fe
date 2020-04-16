import React from "react";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import { Router } from "@reach/router";
import TopicPage from "./components/TopicPage";
import ArticlePage from "./components/ArticlePage";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./components/LoginPage";
import { UserProvider } from "./components/contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <Router id="mainContent">
        <FrontPage path="/" />
        <LoginPage path="/login" />
        <TopicPage path="/topics/:topic" />
        <ArticlePage path="/topics/:topic/:article_id" />
        <ErrorPage default />
      </Router>
    </UserProvider>
  );
}

export default App;
