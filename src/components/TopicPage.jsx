import React, { Component } from "react";
import Sortbar from "./Sortbar";
import ArticleList from "./ArticleList";
import * as api from "../api";
import styles from "./css/TopicPage.module.css";
import ErrorPage from "./ErrorPage";

class TopicPage extends Component {
  state = {
    articles: [],
    err: null
  };

  render() {
    const { fetchArticles } = this;
    const { topic, user } = this.props;
    const { articles, err } = this.state;

    if (err) return <ErrorPage err={err} />;
    else
      return (
        <>
          <h2 className={styles.topicHead}>{topic}</h2>
          <main className={styles.mainPage}>
            <Sortbar
              sortingFunc={fetchArticles}
              incCommentOption={true}
              topic={topic}
            />
            <ArticleList articles={articles} user={user} />
          </main>
        </>
      );
  }

  componentDidMount() {
    const { fetchArticles } = this;
    const { topic } = this.props;
    fetchArticles({ topic });
  }

  componentDidUpdate(prevProps) {
    const { fetchArticles } = this;
    const { topic } = this.props;
    if (prevProps.uri !== this.props.uri) fetchArticles({ topic });
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
export default TopicPage;
