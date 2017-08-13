import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const APIKey = '';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: APIKey, term: 'gamerena' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
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
