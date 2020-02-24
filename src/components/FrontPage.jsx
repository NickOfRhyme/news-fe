import React, { Component } from "react";
import Sortbar from "./Sortbar";

class FrontPage extends Component {
  render() {
    return (
      <section>
        <Sortbar />
        <ArticleList />
      </section>
    );
  }
}

export default FrontPage;
