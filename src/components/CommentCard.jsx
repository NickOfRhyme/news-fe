import React from "react";

function CommentCard(props) {
  const { votes, created_at, author, body } = props;

  const voteCountMsg =
    votes > 1 ? `${votes} votes` : votes === 1 ? "1 vote" : "no votes";

  const date = new Date(created_at).toUTCString();

  return (
    <li>
      <article>
        <h4>{author}</h4>
        <p>{date}</p>
        <p>{body}</p>
        <p>{voteCountMsg}</p>
      </article>
    </li>
  );
}

export default CommentCard;
