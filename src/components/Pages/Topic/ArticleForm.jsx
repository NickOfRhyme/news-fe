import React, { useState } from "react";
import styles from "./css/ArticleForm.module.css";

const ArticleForm = ({ user, topic, addArticle }) => {
  const isGuest = user === null;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "body") setBody(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addArticle(user, topic, title, body);
    setTitle("");
    setBody("");
  };

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
};

export default ArticleForm;
