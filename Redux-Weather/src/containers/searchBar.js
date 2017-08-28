import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <input className="form-control" />
        <span className="input-group-btn">
          <button type="button" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
