import React from "react";
import DeleteCommentBtn from "./DeleteCommentBtn";
import VoteForm from "./VoteForm";

function CommentCard(props) {
  const {
    votes,
    created_at,
    author,
    body,
    user,
    comment_id,
    removeComment,
    voteComment
  } = props;

  const thisUsersComment = user === author;

  const authorMsg = thisUsersComment ? `${user} - that's you!` : author;

  const date = new Date(created_at).toUTCString();

  return (
    <li>
      <article>
        <h4>{authorMsg}</h4>
        <p>{date}</p>
        <p>{body}</p>
        <VoteForm
          votes={votes}
          comment_id={comment_id}
          voteFunc={voteComment}
        />
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
