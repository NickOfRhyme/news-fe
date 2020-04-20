import React, { useState } from "react";
import styles from "./css/PageTurner.module.css";
import LoadingIndicator from "./LoadingIndicator";

const PageTurner = (props) => {
  const [p, setP] = useState(1);

  const changePage = (direction) => {
    const { limit, fetchFunc } = props;
    fetchFunc({ p: p + direction, limit });
    setP(p + direction);
  };

  const { limit, totalCount, isLoading } = props;
  const finalP = Math.ceil(totalCount / limit);
  return (
    <div className={styles.PageTurner}>
      <button onClick={() => changePage(-1)} disabled={p === 1}>
        &#x2190;
      </button>

      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <p>
          {" "}
          Page {p} of {finalP}
        </p>
      )}
      <button onClick={() => changePage(1)} disabled={p === finalP}>
        &#x2192;
      </button>
    </div>
  );
};

export default PageTurner;
