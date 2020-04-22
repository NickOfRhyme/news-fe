import React, { useState } from "react";
import styles from "./css/DeleteCommentBtn.module.css";

const DeleteCommentBtn = ({ removeComment, comment_id }) => {
  const [confirmBoxShowing, setConfirmBoxShowing] = useState(false);

  const showConfirmBox = () => {
    setConfirmBoxShowing(true);
  };

  const deleteComment = () => {
    removeComment(comment_id);
  };

  const cancelDelete = () => {
    setConfirmBoxShowing(false);
  };

  return confirmBoxShowing ? (
    <aside className={styles.confirmBox}>
      <p className={styles.prompt}>Are you sure?</p>
      <div className={styles.options}>
        <button onClick={deleteComment}>Yes, delete my comment</button>
        <button onClick={cancelDelete}>Cancel</button>
      </div>
    </aside>
  ) : (
    <button onClick={showConfirmBox}>Delete comment</button>
  );
};
export default DeleteCommentBtn;
