import React, { Component } from "react";
import { navigate } from "@reach/router";
import styles from "./css/TopicNav.module.css";

class TopicNav extends Component {
  state = {
    textInput: ""
  };

  render() {
    const { goToTopic, handleTyping } = this;
    const { textInput } = this.state;

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
  }

  handleTyping = event => {
    this.setState({ textInput: event.target.value });
  };

  goToTopic = event => {
    event.preventDefault();
    const { textInput } = this.state;

    navigate(`/topics/${textInput}`);
  };
}
export default TopicNav;
