import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideList from './components/videoList';
import VideoDetail from './components/videoDetail';

const APIKey = '';

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
        <VideoDetail video={ this.state.videos[0] } />
        <VideList videos={ this.state.videos }/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
