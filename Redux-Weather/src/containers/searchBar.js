import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from './../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchFormSubmit = this.onSearchFormSubmit.bind(this);
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
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
