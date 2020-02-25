import React, { Component } from "react";
import Sortbar from "./Sortbar";
import ArticleList from "./ArticleList";
import * as api from "../api";

class TopicPage extends Component {
  state = {
    articles: []
  };

  render() {
    const { fetchArticles } = this;
    const { topic } = this.props;
    const { articles } = this.state;

    return (
      <main>
        <Sortbar
          sortingFunc={fetchArticles}
          incCommentOption={true}
          topic={topic}
        />
        <ArticleList articles={articles} />
      </main>
    );
  }

  componentDidMount() {
    const { fetchArticles } = this;
    const { topic } = this.props;
    fetchArticles(topic);
  }

  fetchArticles = (topic, sort_by, order) => {
    api.getArticles({ topic, sort_by, order }).then(articles => {
      this.setState(articles);
    });
  };
}
export default TopicPage;
