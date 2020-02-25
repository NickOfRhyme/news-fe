import axios from "axios";

const BASE_URL = "https://nicks-breaking-news.herokuapp.com/api/";

export const getArticles = params => {
  return axios.get(`${BASE_URL}articles`, { params }).then(response => {
    return response.data;
  });
};

export const getArticle = (article_id, params) => {
  return axios
    .get(`${BASE_URL}articles/${article_id}`, { params })
    .then(response => {
      return response.data;
    });
};

export const getComments = (article_id, params) => {
  return axios
    .get(`${BASE_URL}articles/${article_id}/comments`, { params })
    .then(response => {
      return response.data;
    });
};

export const postComment = (article_id, username, body) => {
  return axios
    .post(`${BASE_URL}articles/${article_id}/comments`, { username, body })
    .then(response => {
      return response.data;
    });
};

export const deleteComment = comment_id => {
  return axios
    .delete(`${BASE_URL}comments/${comment_id}`)
    .then(response => response.data);
};
