import React, { Component } from "react";
import ArticleFullView from "./ArticleFullView";
import CommentList from "./CommentList";
import ReplyForm from "./ReplyForm";
import * as api from "../api";
import Sortbar from "./Sortbar";
import ErrorPage from "./ErrorPage";
import LoadingIndicator from "./LoadingIndicator";
import UserContext from "./contexts/UserContext";

class ArticlePage extends Component {
  static contextType = UserContext;

  state = {
    article: {},
    comments: [],
    isLoading: true,
    err: null
  };

  render = () => {
    const { comments, article, err, isLoading } = this.state;
    const { article_id } = this.props;
    const { addComment, fetchComments, removeComment } = this;

    console.log(article);

    if (err) {
      return <ErrorPage err={err} />;
    }
    if (isLoading)
      return (
        <div className="LoadingContainer">
          <LoadingIndicator />
        </div>
      );
    else
      return (
        <main>
          <ArticleFullView {...article} />
          <Sortbar sortingFunc={fetchComments} />
          <CommentList
            comments={comments}
            user={this.context.user}
            removeComment={removeComment}
          />
          <ReplyForm
            article_id={article_id}
            addComment={addComment}
            user={this.context.user}
          />
        </main>
      );
  };

  fetchArticle = () => {
    const { article_id, topic } = this.props;
    api
      .getArticle(article_id)
      .then(({ article }) => {
        if (article.topic === topic || topic === "all") {
          this.setState({ article, isLoading: false });
        } else {
          this.setState({
            err: {
              response: {
                data: `The ${topic} topic contains no such article`,
                status: "400"
              }
            }
          });
        }
      })
      .catch((err) => {
        this.setState({ err });
      });
  };

  fetchComments = (queries) => {
    const { article_id } = this.props;
    api
      .getComments(article_id, queries)
      .then((comments) => {
        this.setState(comments);
      })
      .catch((err) => {
        this.setState({ err });
      });
  };

  addComment = (article_id, username, body) => {
    api
      .postComment(article_id, username, body)
      .then(({ comment }) => {
        this.setState((currentState) => {
          return {
            comments: [...currentState.comments, comment],
            article: {
              ...currentState.article,
              comment_count: +currentState.article.comment_count + 1
            }
          };
        });
      })
      .catch((err) => {
        this.setState({ err });
      });
  };

  removeComment = (comment_id) => {
    api
      .deleteComment(comment_id)
      .then((response) => {
        this.setState((currentState) => {
          return {
            comments: currentState.comments.filter((comment) => {
              return comment.comment_id !== comment_id;
            })
          };
        });
      })
      .catch((err) => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchArticle();
    this.fetchComments();
  }
}

export default ArticlePage;
