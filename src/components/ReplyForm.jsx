import React, { Component } from "react";
import UserContext from "./contexts/UserContext";
import styles from "./css/ReplyForm.module.css";

class ReplyForm extends Component {
  static contextType = UserContext;

  state = {
    value: ""
  };

  render() {
    const { user } = this.context;

    return (
      <form
        id="reply-form"
        onSubmit={this.handleSubmit}
        className={styles.wholeForm}
      >
        <label className={styles.label}>
          Enter your reply:
          <textarea
            required
            onChange={this.handleChange}
            value={this.state.value}
            className={styles.textarea}
          />
        </label>
        <button
          type="submit"
          className={styles.postButton}
          disabled={user === "Guest"}
        >
          Post comment
        </button>
      </form>
    );
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const body = this.state.value;
    const { article_id, addComment, user } = this.props;
    addComment(article_id, user, body);
    this.setState({ value: "" });
  };
}

export default ReplyForm;
