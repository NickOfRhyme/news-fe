import axios from "axios";

const BASE_URL = "https://nicks-breaking-news.herokuapp.com/api/";

export const getArticles = params => {
  return axios
    .get(`${BASE_URL}articles`, { params })
    .then(response => {
      return response.data;
    })
    .catch(console.log);
};

export const getArticle = (article_id, params) => {
  return axios
    .get(`${BASE_URL}articles/${article_id}`, { params })
    .then(response => {
      return response.data;
    })
    .catch(console.log);
};

export const getComments = (article_id, params) => {
  return axios
    .get(`${BASE_URL}articles/${article_id}/comments`, { params })
    .then(response => {
      return response.data;
    })
    .catch(console.log);
};
