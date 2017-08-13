import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideList from './components/videoList';

const APIKey = 'AIzaSyCO2KrVgWCZoyIbBbZiULeUoQlaBh6_5SQ';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: APIKey, term: 'gamerena' }, (videos) => {
      this.setState({ videos });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideList videos={ this.state.videos }/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
