import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from './../actions/index';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li  onClick={() => this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    )
  }
}

// Obejct returned from it will be made as props to container
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Object returned from it will be made as props to container
function mapDispatchToProps(dispatch) {
  // When selectBook is called, the result should pass to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
