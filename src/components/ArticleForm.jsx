import React, { Component } from "react";

class ArticleForm extends Component {
  state = {
    title: "",
    body: ""
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { title, body } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            onChange={handleChange}
            type="text"
            name="title"
            value={title}
            required
          />
        </label>
        <label>
          Content:
          <textarea onChange={handleChange} name="body" value={body} required />
        </label>
        <button>Post new article</button>
      </form>
    );
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { user, topic, addArticle } = this.props;
    const { title, body } = this.state;
    e.preventDefault();
    addArticle(user, topic, title, body);
    this.setState({ title: "", body: "" });
  };
}

export default ArticleForm;
