export function selectBook (book) {
  // this is an ActionCreateor, which should return an action with type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
