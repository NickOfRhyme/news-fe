import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as api from "../../../api";
import PropTypes from "prop-types";
import styles from "./css/NewTopicPage.module.css";

NewTopicPage.propTypes = {
  topic: PropTypes.string
};

function NewTopicPage({ topic }) {
  const { user } = useContext(UserContext);
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api.postTopic(user, topic, description).then((err) => {
      console.log(err);
    });
  };
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

export default NewTopicPage;
