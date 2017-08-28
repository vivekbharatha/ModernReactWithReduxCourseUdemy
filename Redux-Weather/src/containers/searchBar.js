import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onSearchFormSubmit}>
        <input className="form-control"
        placeholder="Grab 5 day forecast in any city"
        value={this.state.term}
        onChange={this.onInputChange}
      />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSearchFormSubmit(event) {
    event.preventDefault();
    // Let's call OpenWeatherAPI here and nail it!
  }
}
