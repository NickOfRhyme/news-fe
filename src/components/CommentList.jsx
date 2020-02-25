import React from "react";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const { comments, user, removeComment } = props;
  return (
    <ul>
      {comments.map(comment => {
        return (
          <CommentCard
            {...comment}
            key={comment.comment_id}
            user={user}
            removeComment={removeComment}
          />
        );
      })}
    </ul>
  );
}

export default CommentList;
