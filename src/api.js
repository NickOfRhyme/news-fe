import axios from "axios";

const BASE_URL = "https://nicks-breaking-news.herokuapp.com/api/";

export const getArticles = (params) => {
  return axios
    .get(`${BASE_URL}articles`, { params })
    .then((response) => response.data);
};

export const getArticle = (article_id, params) => {
  return axios
    .get(`${BASE_URL}articles/${article_id}`, { params })
    .then((response) => response.data);
};

export const postArticle = (author, topic, title, body) => {
  return axios
    .post(`${BASE_URL}articles`, { author, topic, title, body })
    .then((response) => response.data);
};

export const deleteArticle = (article_id) => {
  return axios
    .delete(`${BASE_URL}articles/${article_id}`)
    .then((response) => response.data);
};

export const patchArticle = (article_id, vote) => {
  return axios
    .patch(`${BASE_URL}articles/${article_id}`, { inc_votes: vote })
    .then((response) => response.data);
};

export const getComments = (article_id, params) => {
  return axios
    .get(`${BASE_URL}articles/${article_id}/comments`, { params })
    .then((response) => response.data);
};

export const postComment = (article_id, username, body) => {
  return axios
    .post(`${BASE_URL}articles/${article_id}/comments`, { username, body })
    .then((response) => response.data);
};

export const deleteComment = (comment_id) => {
  return axios
    .delete(`${BASE_URL}comments/${comment_id}`)
    .then((response) => response.data);
};

export const patchComment = (comment_id, vote) => {
  return axios
    .patch(`${BASE_URL}comments/${comment_id}`, { inc_votes: vote })
    .then((response) => response.data);
};

export const postTopic = (author, slug, description) => {
  return axios
    .post(`${BASE_URL}topics`, { author, slug, description })
    .then((response) => response.data);
};

export const getUser = (username) => {
  return axios
    .get(`${BASE_URL}users/${username}`)
    .then((response) => response.data);
};
