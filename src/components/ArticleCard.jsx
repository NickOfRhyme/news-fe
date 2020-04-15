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

  const authorMsg = isThisUsersArticle ? `YOU - ${user}` : author;

  const commentCountMsg =
    +comment_count > 1
      ? `${+comment_count} comments`
      : +comment_count === 1
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
        <h3 className={styles.title}>
          <Link to={`/topics/${topic}/${article_id}`}>{title}</Link>
        </h3>

        <p className={styles.author}>{authorMsg}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.cardBody}>{preview}</p>
        <p className={styles.commentCount}>{commentCountMsg}</p>
        <p className={styles.voteCount}>{voteCountMsg}</p>
      </article>
    </li>
  );
}

export default ArticleCard;
