// state arguement is not whole app state, just piece of state where this reducer is responsible
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      break;
    default:

  }

  return state;
}
