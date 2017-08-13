import React , { Component }from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="row">
        <input
          className="form-control col-md-4 offset-md-4"
          value={ this.state.term }
          onChange={ (event) => this.setState({ term: event.target.value }) }
        />
      </div>
    );
  }
}

export default SearchBar;
