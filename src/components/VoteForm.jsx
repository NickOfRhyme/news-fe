import React from "react";
import * as api from "../api";
import UserContext from "./contexts/UserContext";
import styles from "./css/VoteForm.module.css";

class VoteForm extends React.Component {
  static contextType = UserContext;

  state = {
    voteChange: 0,
    err: null
  };

  render = () => {
    const { updateVote } = this;
    const { user } = this.context;
    const { voteChange, err } = this.state;
    const { votes, comment_id, article_id } = this.props;

    const voteCountMsg =
      votes + voteChange > 1 || votes + voteChange < 0
        ? `${votes + voteChange} votes`
        : votes + voteChange === 1
        ? "1 vote"
        : "no votes";

    return (
      <div>
        <button
          className={styles.button}
          onClick={() => {
            updateVote(comment_id, article_id, -1);
          }}
          disabled={voteChange < 0 || user === "Guest"}
        >
          -
        </button>
        <p className={styles.voteCount}>{voteCountMsg}</p>
        <button
          className={styles.button}
          onClick={() => {
            updateVote(comment_id, article_id, 1);
          }}
          disabled={voteChange > 0 || user === "Guest"}
        >
          +
        </button>
        {err && <p className={styles.errorMsg}>{err}</p>}
      </div>
    );
  };

  updateVote = (comment_id, article_id, increment) => {
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + increment };
    });

    if (article_id !== undefined) {
      api
        .patchArticle(article_id, increment)
        .then(() => {
          this.setState({ err: null });
        })
        .catch(() => {
          this.setState(currentState => {
            return {
              voteChange: currentState.voteChange - increment,
              err: "Vote not processed!"
            };
          });
        });
    } else {
      api
        .patchComment(comment_id, increment)
        .then(() => {
          this.setState({ err: null });
        })
        .catch(() => {
          this.setState(currentState => {
            return {
              voteChange: currentState.voteChange - increment,
              err: "Vote not processed!"
            };
          });
        });
    }
  };
}

export default VoteForm;
