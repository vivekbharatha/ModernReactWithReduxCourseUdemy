import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import env from './../env';

const APIKey = env.YOUTUBE_KEY;

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchYT('gamerena');
  }

  searchYT(term) {
    YTSearch({ key: APIKey, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.searchYT(term)}, 300);
    return (
      <div>
        <SearchBar onTermChange = {videoSearch} />
        <div className="row">
          <VideoDetail video={ this.state.selectedVideo } />
          <VideoList
              onVideoSelect = { (selectedVideo) => this.setState({selectedVideo}) }
             videos={ this.state.videos }/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
