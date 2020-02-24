import React from "react";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const { comments } = props;
  return (
    <ul>
      {comments.map(comment => {
        return <CommentCard {...comment} />;
      })}
    </ul>
  );
}

export default CommentList;
