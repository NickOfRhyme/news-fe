import React, { Component } from "react";
import Sortbar from "./Sortbar";
import ArticleList from "./ArticleList";

class FrontPage extends Component {
  state = {
    articles: [
      {
        author: "weegembump",
        title: "Seafood substitutions are increasing",
        article_id: 33,
        topic: "cooking",
        created_at: "2018-05-30T15:59:13.341Z",
        votes: 0,
        comment_count: "6"
      },
      {
        author: "cooljmessy",
        title: "Express.js: A Server-Side JavaScript Framework",
        article_id: 8,
        topic: "coding",
        created_at: "2016-06-30T06:59:39.654Z",
        votes: 0,
        comment_count: "7"
      },
      {
        author: "jessjelly",
        title:
          "Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams",
        article_id: 30,
        topic: "cooking",
        created_at: "2018-05-06T02:40:35.489Z",
        votes: 0,
        comment_count: "8"
      }
    ]
  };

  render() {
    const { articles } = this.state;

    return (
      <section>
        <Sortbar />
        <ArticleList articles={articles} />
      </section>
    );
  }

  sortArticles = (sort_by, order) => {};
}

export default FrontPage;
