import React, { useState, useEffect } from "react";
import styles from "./css/Sortbar.module.css";

const Sortbar = ({ incCommentOption, sortingFunc, topic }) => {
  const [sort_by, setSort] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    // sortingFunc({ topic, order, sort_by });
    console.log(topic, order, sort_by);
  }, [order, sort_by]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    if (name === "sort_by") setSort(value);
    if (name === "order") setOrder(value);
  };

  return (
    <form className={styles.mainSortbar}>
      <label>
        Sort by:
        <select onChange={handleChange} id="" name="sort_by">
          <option value="created_at">date</option>
          {incCommentOption && <option value="comment_count">comments</option>}
          <option value="votes">votes</option>
        </select>
        <select onChange={handleChange} id="" name="order">
          <option value="desc">descending</option>
          <option value="asc">ascending</option>
        </select>
      </label>
    </form>
  );
};

export default Sortbar;
