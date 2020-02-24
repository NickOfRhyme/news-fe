import React from "react";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const { comments } = props;
  return (
    <ul>
      {comments.map(comment => {
        return <CommentCard {...comment} key={comment.comment_id} />;
      })}
    </ul>
  );
}

export default CommentList;
