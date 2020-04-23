import React from "react";
import VoteForm from "../../VoteForm";
import styles from "./css/ArticleFullView.module.css";

function ArticleFullView(props) {
  const {
    title,
    body,
    votes,
    article_id,
    author,
    created_at,
    comment_count
  } = props;

  const commentCountMsg =
    +comment_count > 1
      ? `${+comment_count} comments`
      : +comment_count === 1
      ? "1 comment"
      : "no comments";

  const date = new Date(created_at).toUTCString();

  return (
    <section className={styles.wholeArticle}>
      <h2 className={styles.title}>{title}</h2>
      <article className={styles.mainArticle}>
        <p className={styles.author}>{author}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.body}>{body}</p>
        <span className={styles.lastLine}>
          <p className={styles.commentCount}>{commentCountMsg}</p>
          <VoteForm article_id={article_id} votes={votes} />
        </span>
      </article>
    </section>
  );
}

export default ArticleFullView;
