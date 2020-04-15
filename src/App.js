import React, { useState } from "react";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import { Router, Redirect } from "@reach/router";
import TopicPage from "./components/TopicPage";
import ArticlePage from "./components/ArticlePage";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./components/LoginPage";
import UserContext from "./components/contexts/UserContext";

function App() {
  const [user, changeUser] = useState("Guest");

  return (
    <UserContext.Provider value={{ user, changeUser }}>
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

export default App;
