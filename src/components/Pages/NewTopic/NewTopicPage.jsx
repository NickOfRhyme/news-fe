import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import ErrorPage from "../Error/ErrorPage";
import * as api from "../../../api";
import PropTypes from "prop-types";
import styles from "./css/NewTopicPage.module.css";
import { Link } from "@reach/router";

NewTopicPage.propTypes = {
  topic: PropTypes.string,
  fetchArticles: PropTypes.func
};

function NewTopicPage({ topic, fetchArticles }) {
  const { user } = useContext(UserContext);
  const [description, setDescription] = useState("");
  const [err, setErr] = useState(null);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .postTopic(user, topic, description)
      .then(() => {
        fetchArticles();
      })
      .catch((err) => setErr(err));
  };

  if (err) return <ErrorPage err={err} />;
  else if (user === "Guest") {
    return (
      <div>
        <p>
          The topic '{topic}' does not exist. Why not{" "}
          <Link to="/login" state={{ returnAfterLogin: true }}>
            log in
          </Link>{" "}
          so that you can create it?
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>The topic '{topic}' does not exist. Why not create it?</p>
        <form className={styles.topicForm} onSubmit={handleSubmit}>
          <label>
            Write a short description of the topic:
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </label>
          <button className={styles.submitButton} disabled={!description}>
            Create topic
          </button>
        </form>
      </div>
    );
  }
}

export default NewTopicPage;
