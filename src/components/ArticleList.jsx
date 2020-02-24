import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = props => {
  const { articles } = props;
  return (
    <ul>
      {articles.map(article => {
        return <ArticleCard {...article} key={article.article_id} />;
      })}
    </ul>
  );
};

export default ArticleList;
