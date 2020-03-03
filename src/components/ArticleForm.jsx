import React, { Component } from "react";
import styles from "./css/ArticleForm.module.css";

class ArticleForm extends Component {
  state = {
    title: "",
    body: ""
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { title, body } = this.state;
    const { user } = this.props;
    const isGuest = user === "Guest";
    return (
      <>
        <h3 className={styles.formHead}>Add new article</h3>
        <form onSubmit={handleSubmit} className={styles.wholeForm}>
          <label className={styles.label}>
            Title:
            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={title}
              className={styles.textinput}
              disabled={isGuest}
              required
            />
          </label>
          <label className={styles.label}>
            Content:
            <textarea
              onChange={handleChange}
              name="body"
              value={isGuest ? "Guests may not add new articles" : body}
              className={styles.textarea}
              disabled={isGuest}
              required
            />
          </label>
          <button disabled={isGuest}>Post new article</button>
        </form>
      </>
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
