import React, { Component } from "react";
import Sortbar from "./Sortbar";
import ArticleList from "./ArticleList";

class TopicPage extends Component {
  state = {
    articles: [
      {
        author: "tickle122",
        title: "A BRIEF HISTORY OF FOOD—NO BIG DEAL",
        article_id: 29,
        topic: "cooking",
        created_at: "2017-03-11T13:20:18.573Z",
        votes: 0,
        comment_count: "10"
      },
      {
        author: "cooljmessy",
        title: "Stone Soup",
        article_id: 35,
        topic: "cooking",
        created_at: "2016-12-13T20:58:40.516Z",
        votes: 0,
        comment_count: "14"
      }
    ]
  };

  render() {
    const { topic } = this.props;
    const { articles } = this.state;

    return (
      <main>
        <Sortbar />
        <ArticleList articles={articles} />
      </main>
    );
  }
}
export default TopicPage;
