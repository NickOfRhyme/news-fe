import React from "react";
import Header from "./components/Header";
import FrontPage from "./components/Pages/Front/FrontPage";
import { Router } from "@reach/router";
import TopicPage from "./components/Pages/Topic/TopicPage";
import ArticlePage from "./components/Pages/Article/ArticlePage";
import ErrorPage from "./components/Pages/Error/ErrorPage";
import LoginPage from "./components/Pages/Login/LoginPage";
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
