import React, { Component } from "react";
import Sortbar from "../../Sortbar";
import ArticleList from "../../ArticleList";
import * as api from "../../../api";
import ErrorPage from "../Error/ErrorPage";
import PageTurner from "../../PageTurner";
import { UserContext } from "../../contexts/UserContext";

class FrontPage extends Component {
  static contextType = UserContext;

  state = {
    articles: [{ total_count: 0 }],
    articleQueries: { p: 1, limit: 10 },
    isLoading: true,
    err: null
  };

  render() {
    const { articles, err, articleQueries, isLoading } = this.state;
    const { fetchArticles } = this;

    if (err) return <ErrorPage err={err} />;
    else
      return (
        <main>
          <Sortbar sortingFunc={fetchArticles} incCommentOption={true} />
          <PageTurner
            limit={articleQueries.limit}
            totalCount={articles[0].total_count}
            fetchFunc={fetchArticles}
            isLoading={isLoading}
          />
          {!isLoading && (
            <ArticleList
              articles={articles}
              topicHead={true}
              user={this.context.user}
            />
          )}
        </main>
      );
  }

  componentDidMount() {
    this.fetchArticles();
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
}

export default FrontPage;
