import React from "react";
import DeleteCommentBtn from "./DeleteCommentBtn";
import VoteForm from "./VoteForm";
import styles from "./css/CommentCard.module.css";

function CommentCard(props) {
  const {
    user,
    votes,
    created_at,
    author,
    body,
    comment_id,
    removeComment
  } = props;

  const isThisUsersComment = user === author;

  const authorMsg = isThisUsersComment ? `${user} - that's you!` : author;

  const date = new Date(created_at).toUTCString();

  return (
    <li className={styles.wholeCard}>
      <article className={styles.mainCard}>
        <p className={styles.author}>{authorMsg}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.cardBody}>{body}</p>
        <div className={styles.formContainer}>
          <span className={styles.voteForm}>
            <VoteForm votes={votes} comment_id={comment_id} />
          </span>
          {isThisUsersComment && (
            <DeleteCommentBtn
              comment_id={comment_id}
              removeComment={removeComment}
            />
          )}
        </div>
      </article>
    </li>
  );
}

export default CommentCard;
