import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'vivekbharatha';

export const GET_POSTS = 'GET_POSTS';

export function getPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

  return {
    type: GET_POSTS,
    payload: request
  }
}
