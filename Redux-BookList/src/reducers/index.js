import { combineReducers } from 'redux';
import BooksReducer from './reducerBooks';
import ActiveBookReducer from './reducerActiveBook';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
