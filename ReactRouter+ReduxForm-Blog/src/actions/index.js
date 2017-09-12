import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'vivekbharatha';

export const GET_POSTS = 'GET_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';

export function getPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

  return {
    type: GET_POSTS,
    payload: request
  }
}

export function createPost(values, cb) {
  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, values).then(cb);

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function getPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);

  return {
    type: GET_POST,
    payload: request
  }
}

export function deletePost(id, cb) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}?key=${API_KEY}`).then(cb);

  return {
    type: DELETE_POST,
    payload: id
  }
}
