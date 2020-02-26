import React from "react";
import DeleteCommentBtn from "./DeleteCommentBtn";
import VoteForm from "./VoteForm";

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
    <li>
      <article>
        <p>{authorMsg}</p>
        <p>{date}</p>
        <p>{body}</p>
        <VoteForm votes={votes} comment_id={comment_id} />
        {isThisUsersComment && (
          <DeleteCommentBtn
            comment_id={comment_id}
            removeComment={removeComment}
          />
        )}
      </article>
    </li>
  );
}

export default CommentCard;
