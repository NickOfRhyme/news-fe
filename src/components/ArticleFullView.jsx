import React from "react";
import VoteForm from "./VoteForm";

function ArticleFullView(props) {
  const {
    title,
    body,
    votes,
    article_id,
    author,
    created_at,
    comment_count
  } = props;

  const commentCountMsg =
    comment_count > 1
      ? `${comment_count} comments`
      : comment_count === 1
      ? "1 comment"
      : "no comments";

  return (
    <section>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{created_at}</p>
      <p>{body}</p>
      <p>{commentCountMsg}</p>
      <VoteForm article_id={article_id} votes={votes} />
    </section>
  );
}

export default ArticleFullView;
