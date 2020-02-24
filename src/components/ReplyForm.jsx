import React, { Component } from "react";

class ReplyForm extends Component {
  render() {
    return (
      <form id="reply-form">
        <label>
          Enter you reply:
          <textarea />
        </label>
        <button type="submit">Post comment</button>
      </form>
    );
  }
}

export default ReplyForm;
