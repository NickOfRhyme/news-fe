import React, { Component } from "react";
import Sortbar from "./Sortbar";
import ArticleList from "./ArticleList";
import * as api from "../api";
import ErrorPage from "./ErrorPage";

class FrontPage extends Component {
  state = {
    articles: [],
    err: null
  };

  render() {
    const { articles, err } = this.state;
    const { user } = this.props;
    const { fetchArticles } = this;

    if (err) return <ErrorPage err={err} />;
    else
      return (
        <main>
          <Sortbar sortingFunc={fetchArticles} incCommentOption={true} />
          <ArticleList articles={articles} topicHead={true} user={user} />
        </main>
      );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = queries => {
    api
      .getArticles(queries)
      .then(articles => {
        this.setState(articles);
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default FrontPage;
