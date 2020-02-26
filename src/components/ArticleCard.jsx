import React from "react";
import { Link } from "@reach/router";
import styles from "./css/ArticleCard.module.css";

function ArticleCard(props) {
  const {
    user,
    article_id,
    author,
    comment_count,
    created_at,
    title,
    topic,
    preview,
    votes,
    topicHead
  } = props;

  const isThisUsersArticle = user === author;

  const authorMsg = isThisUsersArticle ? `${user} - that's you!` : author;

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
    <li className={styles.wholeCard}>
      {topicHead && (
        <Link to={`/topics/${topic}`}>
          <h3 className={styles.topicHead}>{topic}</h3>
        </Link>
      )}
      <article className={styles.mainCard}>
        <Link to={`/topics/${topic}/${article_id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{authorMsg}</p>
        <p>{date}</p>
        <p>{preview}</p>
        <p>{commentCountMsg}</p>
        <p>{voteCountMsg}</p>
      </article>
    </li>
  );
}

export default ArticleCard;
