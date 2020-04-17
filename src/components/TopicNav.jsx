import React, { useState } from "react";
import { navigate } from "@reach/router";
import styles from "./css/TopicNav.module.css";

const TopicNav = () => {
  const [textInput, setTextInput] = useState("");

  const handleTyping = (event) => {
    setTextInput(event.target.value);
  };

  const goToTopic = (event) => {
    event.preventDefault();
    navigate(`/topics/${textInput}`);
  };

  return (
    <nav className={styles.mainNav}>
      <form className={styles.navContents} onSubmit={goToTopic}>
        <label className={styles.navLabel}>
          Choose a topic:
          <br />
          <input
            type="text"
            name="topic"
            inputMode="search"
            value={textInput}
            onChange={handleTyping}
          />
        </label>
        <button className={styles.navButton}>Take me there!</button>
      </form>
      <p className={styles.hint}>
        Popular topics include cooking, football and coding
      </p>
    </nav>
  );
};
export default TopicNav;
