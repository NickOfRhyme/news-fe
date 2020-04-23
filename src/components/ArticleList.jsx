import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = (props) => {
  const { articles, topicHead, voteArticle, user } = props;
  return (
    <ul>
      {articles.map((article) => {
        return (
          <ArticleCard
            {...article}
            key={article.article_id}
            topicHead={topicHead}
            voteArticle={voteArticle}
            user={user}
          />
        );
      })}
    </ul>
  );
};

export default ArticleList;
