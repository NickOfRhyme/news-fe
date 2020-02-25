import React from "react";
import DeleteCommentBtn from "./DeleteCommentBtn";

function CommentCard(props) {
  const {
    votes,
    created_at,
    author,
    body,
    user,
    comment_id,
    removeComment
  } = props;

  const thisUsersComment = user === author;

  const voteCountMsg =
    votes > 1 ? `${votes} votes` : votes === 1 ? "1 vote" : "no votes";

  const authorMsg = thisUsersComment ? `${user} - that's you!` : author;

  const date = new Date(created_at).toUTCString();

  return (
    <li>
      <article>
        <h4>{authorMsg}</h4>
        <p>{date}</p>
        <p>{body}</p>
        <p>{voteCountMsg}</p>
        {thisUsersComment && (
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
