import React, { Component } from "react";

class Sortbar extends Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  };

  render() {
    const { handleChange } = this;
    const { incCommentOption } = this.props;
    return (
      <form>
        <select onChange={handleChange} id="" name="sort_by">
          <option value="created_at">date</option>
          {incCommentOption && <option value="comment_count">comments</option>}
          <option value="votes">votes</option>
        </select>
        <select onChange={handleChange} id="" name="order">
          <option value="desc">descending</option>
          <option value="asc">ascending</option>
        </select>
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
    const { prevSort_by, prevOrder } = prevState;
    if (sort_by !== prevSort_by || order !== prevOrder) {
      topic ? sortingFunc(topic, sort_by, order) : sortingFunc(sort_by, order);
    }
  };
}

export default Sortbar;
