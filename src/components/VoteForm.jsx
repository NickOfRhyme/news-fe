import React from "react";
import * as api from "../api";

class VoteForm extends React.Component {
  state = {
    voteChange: 0,
    err: null
  };

  render = () => {
    const { updateVote } = this;
    const { voteChange, err } = this.state;
    const { votes, comment_id, article_id } = this.props;

    const voteCountMsg =
      votes + voteChange > 1 || votes + voteChange < 0
        ? `${votes + voteChange} votes`
        : votes + voteChange === 1
        ? "1 vote"
        : "no votes";

    return (
      <>
        <button
          onClick={() => {
            updateVote(comment_id, article_id, 1);
          }}
          disabled={voteChange > 0}
        >
          +
        </button>
        {voteCountMsg}
        <button
          onClick={() => {
            updateVote(comment_id, article_id, -1);
          }}
          disabled={voteChange < 0}
        >
          -
        </button>
        {err && <p>{err}</p>}
      </>
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
