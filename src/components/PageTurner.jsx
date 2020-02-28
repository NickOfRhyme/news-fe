import React from "react";
import styles from "./css/PageTurner.module.css";
import LoadingIndicator from "./LoadingIndicator";

class PageTurner extends React.Component {
  state = {
    p: 1
  };

  render() {
    const { p } = this.state;
    const { limit, totalCount, isLoading } = this.props;
    const lastP = Math.ceil(totalCount / limit);
    return (
      <div className={styles.PageTurner}>
        <button onClick={() => this.changePage(-1)} disabled={p === 1}>
          &#x2190;
        </button>

        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <p>
            {" "}
            Page {p} of {lastP}
          </p>
        )}
        <button onClick={() => this.changePage(1)} disabled={p === lastP}>
          &#x2192;
        </button>
      </div>
    );
  }

  changePage(direction) {
    const { limit, fetchFunc } = this.props;
    const { p } = this.state;
    fetchFunc({ p: p + direction, limit });
    this.setState(currentState => {
      return { p: currentState.p + direction };
    });
  }
}

export default PageTurner;
