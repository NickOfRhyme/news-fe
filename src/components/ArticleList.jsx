import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = props => {
  const { articles, topicHead } = props;
  return (
    <ul>
      {articles.map(article => {
        return (
          <ArticleCard
            {...article}
            key={article.article_id}
            topicHead={topicHead}
          />
        );
      })}
    </ul>
  );
};

export default ArticleList;
