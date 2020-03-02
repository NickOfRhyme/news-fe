# Breaking News

This is a react front-end for [Nick's breaking news API](https://github.com/NickOfRhyme/news). A live version is hosted on [Netlify](https://nicks-breaking-news.netlify.com/).

## About

Nick's breaking news is a reddit-style news database. It keeps track of a number of topics (cooking, coding and football in the demo version), each of which contain several articles, which in turn contain multiple comments.

You can log in as one of several demo users, vote on comments and articles, and post new comments to existing articles. You can also log in as a guest, in which case you will not be able to vote or comment.

## Navigation

The root page of the site is a paginated list of all the most recent articles, from which you can navigate to individual topics or articles via links.

Every page has a header containing a link back to the front page, an input box for topics, and a display of the currently logged in user (the username also functions as a link to the log in page).

### URL structure

The login page is at `/login`

Topics are accessed through `/topics/:topic_name/`

Articles are accessed through `/topics/:topic_name/:article_id` or `/topics/all/:article_id`

Individual comments are not accessed directly, but displayed as part of the article page.
