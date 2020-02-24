import React from "react";

function ArticleFullView(props) {
  const { title, body, votes, author, created_at, comment_count } = props;

  const commentCountMsg =
    comment_count > 1
      ? `${comment_count} comments`
      : comment_count === 1
      ? "1 comment"
      : "no comments";

  const voteCountMsg =
    votes > 1 ? `${votes} votes` : votes === 1 ? "1 vote" : "no votes";

  return (
    <section>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{created_at}</p>
      <p>{body}</p>
      <p>{commentCountMsg}</p>
      <p>{voteCountMsg}</p>
    </section>
  );
}

export default ArticleFullView;
