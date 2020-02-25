import React, { Component } from "react";
import ArticleFullView from "./ArticleFullView";
import CommentList from "./CommentList";
import ReplyForm from "./ReplyForm";
import * as api from "../api";
import Sortbar from "./Sortbar";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    const { comments, article } = this.state;
    const { article_id, user } = this.props;
    const { addComment, fetchComments, removeComment } = this;

    return (
      <main>
        <ArticleFullView {...article} />
        <hr />
        <Sortbar sortingFunc={fetchComments} />
        <hr />
        <CommentList
          comments={comments}
          user={user}
          removeComment={removeComment}
        />
        <hr />
        <ReplyForm
          article_id={article_id}
          addComment={addComment}
          user={user}
        />
      </main>
    );
  }

  fetchArticle = () => {
    const { article_id } = this.props;
    api.getArticle(article_id).then(article => {
      this.setState(article);
    });
  };

  fetchComments = (sort_by, order) => {
    const { article_id } = this.props;
    api.getComments(article_id, { sort_by, order }).then(comments => {
      this.setState(comments);
    });
  };

  addComment = (article_id, username, body) => {
    api.postComment(article_id, username, body).then(({ comment }) => {
      this.setState(currentState => {
        return {
          comments: [...currentState.comments, comment],
          article: {
            ...currentState.article,
            comment_count: +currentState.article.comment_count + 1
          }
        };
      });
    });
  };

  removeComment = comment_id => {
    api.deleteComment(comment_id).then(response => {
      console.log(response);
      this.setState(currentState => {
        return {
          comments: currentState.comments.filter(comment => {
            return comment.comment_id !== comment_id;
          })
        };
      });
    });
  };

  componentDidMount() {
    this.fetchArticle();
    this.fetchComments();
  }
}

export default ArticlePage;
