import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail  from './components/video_detail';
const API_KEY = 'AIzaSyArqqD0YwSyd857MfQHUNDVIwaTGcF2vn0';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('dota');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    // Throttle search with debounce from lodash; App can update all it wants but will only call this every 300ms
    // No need for callback function in props since we already have a callback with debounce
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        /> 
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));