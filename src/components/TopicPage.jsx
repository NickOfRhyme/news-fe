import React, { Component } from "react";
import Sortbar from "./Sortbar";
import ArticleList from "./ArticleList";
import * as api from "../api";

class TopicPage extends Component {
  state = {
    articles: []
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

  componentDidMount() {
    const { topic } = this.props;
    api.getArticles({ topic }).then(articles => {
      this.setState(articles);
    });
  }
}
export default TopicPage;
