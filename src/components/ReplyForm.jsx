import React, { Component } from "react";

class ReplyForm extends Component {
  state = {
    value: ""
  };

  render() {
    return (
      <form id="reply-form" onSubmit={this.handleSubmit}>
        <label>
          Enter you reply:
          <textarea
            required
            onChange={this.handleChange}
            value={this.state.value}
          />
        </label>
        <button type="submit">Post comment</button>
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
