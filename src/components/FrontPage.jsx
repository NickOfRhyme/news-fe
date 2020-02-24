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

    return (
      <main>
        <Sortbar />
        <ArticleList articles={articles} topicHead={true} />
      </main>
    );
  }

  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState(articles);
    });
  }
}

export default FrontPage;
