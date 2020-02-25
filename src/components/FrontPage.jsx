import React, { Component } from "react";
import Sortbar from "./Sortbar";
import ArticleList from "./ArticleList";
import * as api from "../api";

class FrontPage extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    const { fetchArticles } = this;

    return (
      <main>
        <Sortbar sortingFunc={fetchArticles} incCommentOption={true} />
        <ArticleList articles={articles} topicHead={true} />
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = (sort_by, order) => {
    api.getArticles({ sort_by, order }).then(articles => {
      this.setState(articles);
    });
  };
}

export default FrontPage;
