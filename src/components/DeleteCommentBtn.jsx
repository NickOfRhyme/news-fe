import React from "react";
import styles from "./css/DeleteCommentBtn.module.css";

class DeleteCommentBtn extends React.Component {
  state = {
    showingConfirmBox: false
  };
  render() {
    const { showConfirmBox, deleteComment, cancelDelete } = this;
    const { showingConfirmBox } = this.state;
    return showingConfirmBox ? (
      <aside className={styles.confirmBox}>
        Are you sure?
        <button onClick={deleteComment}>Yes, delete my comment</button>
        <button onClick={cancelDelete}>Cancel</button>
      </aside>
    ) : (
      <button onClick={showConfirmBox}>Delete comment</button>
    );
  }

  showConfirmBox = () => {
    this.setState({ showingConfirmBox: true });
  };

  deleteComment = () => {
    const { removeComment, comment_id } = this.props;
    removeComment(comment_id);
  };

  cancelDelete = () => {
    this.setState({ showingConfirmBox: false });
  };
}
export default DeleteCommentBtn;
