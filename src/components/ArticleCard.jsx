import React from "react";
import { Link } from "@reach/router";

function ArticleCard(props) {
  const {
    article_id,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
    topicHead
  } = props;

  const commentCountMsg =
    comment_count > 1
      ? `${comment_count} comments`
      : comment_count === 1
      ? "1 comment"
      : "no comments";

  const voteCountMsg =
    votes > 1 ? `${votes} votes` : votes === 1 ? "1 vote" : "no votes";

  const date = new Date(created_at).toUTCString();
  return (
    <li>
      {topicHead && (
        <Link to={`/topics/${topic}`}>
          <h3>{topic}</h3>
        </Link>
      )}
      <p>{author}</p>
      <article>
        <Link to={`/topics/${topic}/${article_id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{date}</p>
        <p>Start of article...</p>
        <p>{commentCountMsg}</p>
        <p>{voteCountMsg}</p>
      </article>
    </li>
  );
}

export default ArticleCard;
