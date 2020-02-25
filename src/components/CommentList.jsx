import React from "react";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const { comments, user, removeComment, voteComment } = props;
  return (
    <ul>
      {comments.map(comment => {
        return (
          <CommentCard
            {...comment}
            key={comment.comment_id}
            user={user}
            removeComment={removeComment}
            voteComment={voteComment}
          />
        );
      })}
    </ul>
  );
}

export default CommentList;
