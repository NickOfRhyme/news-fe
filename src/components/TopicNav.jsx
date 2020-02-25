import React, { Component } from "react";
import { navigate } from "@reach/router";

class TopicNav extends Component {
  state = {
    textInput: ""
  };

  render() {
    const { goToTopic, handleTyping } = this;
    const { textInput } = this.state;

    return (
      <nav>
        <label>
          Choose a topic:
          <form onSubmit={goToTopic}>
            <input
              type="text"
              name="topic"
              value={textInput}
              onChange={handleTyping}
            />
            <button>Take me there!</button>
          </form>
        </label>
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
