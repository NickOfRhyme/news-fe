import React from "react";

function ArticleCard(props) {
  const {
    article_id,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes
  } = props;

  const commentMsg =
    comment_count > 1
      ? `${comment_count} comments`
      : comment_count === 1
      ? "1 comment"
      : "no comments";

  const voteMsg =
    votes > 1 ? `${votes} votes` : votes === 1 ? "1 vote" : "no votes";

  const date = new Date(created_at).toUTCString();
  return (
    <li>
      <h3>{topic}</h3>
      <h4>{author}</h4>
      <article>
        <h3>{title}</h3>
        <h4>{date}</h4>
        <p>Start of article...</p>
        <h4>{commentMsg}</h4>
        <h4>{voteMsg}</h4>
      </article>
    </li>
  );
}

export default ArticleCard;
