import React from "react";

function DeleteCommentBtn(props) {
  const { removeComment, comment_id } = props;
  return (
    <button
      onClick={() => {
        removeComment(comment_id);
      }}
    >
      Delete comment
    </button>
  );
}
export default DeleteCommentBtn;
