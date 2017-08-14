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
          onChange={ (event) => this.onInputChange(event.target.value) }
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onTermChange(term);
  }


}

export default SearchBar;
