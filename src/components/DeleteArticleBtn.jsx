import React, { useState } from "react";
import styles from "./css/DeleteBtn.module.css";

const DeleteArticleBtn = ({ removeArticle, article_id }) => {
  const [confirmBoxShowing, setConfirmBoxShowing] = useState(false);

  const showConfirmBox = () => {
    setConfirmBoxShowing(true);
  };

  const deleteArticle = () => {
    removeArticle(article_id);
  };

  const cancelDelete = () => {
    setConfirmBoxShowing(false);
  };

  return confirmBoxShowing ? (
    <>
      <aside className={styles.confirmBox}>
        <p className={styles.prompt}>Are you sure?</p>
        <div className={styles.options}>
          <button onClick={deleteArticle}>Yes, delete my article</button>
          <button onClick={cancelDelete}>Cancel</button>
        </div>
      </aside>
      <button disabled>Delete article</button>
    </>
  ) : (
    <button onClick={showConfirmBox}>Delete article</button>
  );
};
export default DeleteArticleBtn;
