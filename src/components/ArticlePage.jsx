import React, { Component } from "react";
import ArticleFullView from "./ArticleFullView";
import CommentList from "./CommentList";
import ReplyForm from "./ReplyForm";
import * as api from "../api";
import Sortbar from "./Sortbar";
import ErrorPage from "./ErrorPage";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    err: null
  };

  render() {
    const { comments, article, err } = this.state;
    const { article_id, user } = this.props;
    const {
      addComment,
      fetchComments,
      removeComment,
      voteComment,
      voteArticle
    } = this;
    if (err) return <ErrorPage err={err} />;
    else
      return (
        <main>
          <ArticleFullView {...article} voteArticle={voteArticle} />
          <hr />
          <Sortbar sortingFunc={fetchComments} />
          <hr />
          <CommentList
            comments={comments}
            user={user}
            removeComment={removeComment}
            voteComment={voteComment}
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
    api
      .getArticle(article_id)
      .then(article => {
        this.setState(article);
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  fetchComments = (sort_by, order) => {
    const { article_id } = this.props;
    api
      .getComments(article_id, { sort_by, order })
      .then(comments => {
        this.setState(comments);
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  addComment = (article_id, username, body) => {
    api
      .postComment(article_id, username, body)
      .then(({ comment }) => {
        this.setState(currentState => {
          return {
            comments: [...currentState.comments, comment],
            article: {
              ...currentState.article,
              comment_count: +currentState.article.comment_count + 1
            }
          };
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  removeComment = comment_id => {
    api
      .deleteComment(comment_id)
      .then(response => {
        this.setState(currentState => {
          return {
            comments: currentState.comments.filter(comment => {
              return comment.comment_id !== comment_id;
            })
          };
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  voteComment = (comment_id, vote) => {
    api
      .patchComment(comment_id, vote)
      .then(response => {
        this.setState(currentState => {
          return {
            comments: currentState.comments.map(comment => {
              if (comment.comment_id === comment_id) comment.votes += vote;
              return comment;
            })
          };
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  voteArticle = (article_id, vote) => {
    api
      .patchArticle(article_id, vote)
      .then(response => {
        this.setState(currentState => {
          return {
            article: {
              ...currentState.article,
              votes: currentState.article.votes + vote
            }
          };
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchArticle();
    this.fetchComments();
  }
}

export default ArticlePage;
