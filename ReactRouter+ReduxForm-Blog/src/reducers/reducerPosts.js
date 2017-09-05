import _ from 'lodash';

import { GET_POSTS } from './../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      break;
    default:
      return state;
  }
}
