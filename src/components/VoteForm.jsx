import React from "react";

function VoteForm(props) {
  const { votes, comment_id, article_id, voteFunc } = props;

  const voteCountMsg =
    votes > 1 || votes < 0
      ? `${votes} votes`
      : votes === 1
      ? "1 vote"
      : "no votes";

  return (
    <>
      <button
        onClick={() => {
          voteFunc(comment_id || article_id, 1);
        }}
      >
        +
      </button>
      {voteCountMsg}
      <button
        onClick={() => {
          voteFunc(comment_id || article_id, -1);
        }}
      >
        -
      </button>
    </>
  );
}

export default VoteForm;
