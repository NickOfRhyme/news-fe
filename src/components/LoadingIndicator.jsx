import React from "react";
import styles from "./css/LoadingIndicator.module.css";

function LoadingIndicator() {
  return (
    <div className={styles.LoadingIndicator}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingIndicator;
