import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import styles from "./css/ReplyForm.module.css";

const ReplyForm = (props) => {
  const [value, setValue] = useState("");
  const { user } = useContext(UserContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = value;
    const { article_id, addComment, user } = props;
    addComment(article_id, user, body);
    setValue("");
  };

  return (
    <form id="reply-form" onSubmit={handleSubmit} className={styles.wholeForm}>
      <label className={styles.label}>
        Enter your reply:
        <textarea
          required
          onChange={handleChange}
          value={value}
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
};

export default ReplyForm;
