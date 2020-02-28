import React, { Component } from "react";
import styles from "./css/Sortbar.module.css";

class Sortbar extends Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  };

  render() {
    const { handleChange } = this;
    const { incCommentOption } = this.props;
    return (
      <form className={styles.mainSortbar}>
        <label>
          Sort by:
          <select onChange={handleChange} id="" name="sort_by">
            <option value="created_at">date</option>
            {incCommentOption && (
              <option value="comment_count">comments</option>
            )}
            <option value="votes">votes</option>
          </select>
          <select onChange={handleChange} id="" name="order">
            <option value="desc">descending</option>
            <option value="asc">ascending</option>
          </select>
        </label>
      </form>
    );
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { sortingFunc, topic } = this.props;
    const { sort_by, order } = this.state;
    const prevSort_by = prevState.sort_by;
    const prevOrder = prevState.order;

    if (sort_by !== prevSort_by || order !== prevOrder) {
      sortingFunc({ topic, sort_by, order });
    }
  };
}

export default Sortbar;
