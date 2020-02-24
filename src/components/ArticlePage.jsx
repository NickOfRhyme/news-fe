import React, { Component } from "react";
import ArticleFullView from "./ArticleFullView";
import CommentList from "./CommentList";
import ReplyForm from "./ReplyForm";
import * as api from "../api";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    const { comments, article } = this.state;
    const { article_id } = this.props;

    return (
      <main>
        <ArticleFullView {...article} />
        <hr />
        <CommentList comments={comments} />
        <hr />
        <ReplyForm article_id={article_id} />
      </main>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticle(article_id).then(article => {
      this.setState(article);
    });
    api.getComments(article_id).then(comments => {
      this.setState(comments);
    });
  }
}

export default ArticlePage;
