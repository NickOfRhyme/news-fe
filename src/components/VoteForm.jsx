import React, { useContext, useState } from "react";
import * as api from "../api";
import { UserContext } from "./contexts/UserContext";
import styles from "./css/VoteForm.module.css";

const VoteForm = ({ votes, comment_id, article_id }) => {
  const { user } = useContext(UserContext);
  const [voteChange, setVoteChange] = useState(0);
  const [err, setErr] = useState(null);

  const voteCountMsg =
    votes + voteChange > 1 || votes + voteChange < 0
      ? `${votes + voteChange} votes`
      : votes + voteChange === 1
      ? "1 vote"
      : "no votes";

  const updateVote = (comment_id, article_id, increment) => {
    setVoteChange(voteChange + increment);

    if (article_id !== undefined) {
      api
        .patchArticle(article_id, increment)
        .then(() => {
          setErr(null);
        })
        .catch(() => {
          setVoteChange(voteChange - increment);
          setErr("Vote not processed!");
        });
    } else {
      api
        .patchComment(comment_id, increment)
        .then(() => {
          setErr(null);
        })
        .catch(() => {
          setVoteChange(voteChange - increment);
          setErr("Vote not processed!");
        });
    }
  };

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

export default VoteForm;
