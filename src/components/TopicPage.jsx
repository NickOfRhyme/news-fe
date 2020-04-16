import React, { Component } from "react";
import Sortbar from "./Sortbar";
import ArticleList from "./ArticleList";
import ErrorPage from "./ErrorPage";
import PageTurner from "./PageTurner";
import ArticleForm from "./ArticleForm";
import * as api from "../api";
import styles from "./css/TopicPage.module.css";
import { UserContext } from "./contexts/UserContext";

class TopicPage extends Component {
  static contextType = UserContext;

  state = {
    articles: [{ total_count: 0 }],
    articleQueries: { p: 1, limit: 10 },
    isLoading: true,
    err: null
  };

  render() {
    const { fetchArticles, addArticle } = this;
    const { topic } = this.props;
    const { articles, articleQueries, isLoading, err } = this.state;

    if (err) return <ErrorPage err={err} />;
    else
      return (
        <>
          <PageTurner
            limit={articleQueries.limit}
            totalCount={articles[0].total_count}
            fetchFunc={fetchArticles}
            isLoading={isLoading}
          />
          {!isLoading && (
            <>
              <h2 className={styles.topicHead}>{topic}</h2>
              <main className={styles.mainPage}>
                <Sortbar
                  sortingFunc={fetchArticles}
                  incCommentOption={true}
                  topic={topic}
                />
                <ArticleList articles={articles} user={this.context.user} />
                <ArticleForm
                  user={this.context.user}
                  topic={topic}
                  addArticle={addArticle}
                />
              </main>
            </>
          )}
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

  fetchArticles = (newQueries) => {
    const currQueries = this.state.articleQueries;
    this.setState({ isLoading: true });
    api
      .getArticles({ ...currQueries, ...newQueries })
      .then(({ articles }) => {
        this.setState({
          articles,
          articleQueries: { ...currQueries, ...newQueries },
          isLoading: false,
          err: null
        });
      })
      .catch((err) => {
        this.setState({ err });
      });
  };

  addArticle = (author, topic, title, body) => {
    api
      .postArticle(author, topic, title, body)
      .then(() => {
        this.fetchArticles();
      })
      .catch((err) => {
        this.setState({ err });
      });
  };
}
export default TopicPage;
