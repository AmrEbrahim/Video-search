import React, { Component } from "react";
import Youtube from "../Apis/YoutubeApi";
import DisplaySearch from "./DisplaySearch";
import VideoList from "./videoList";
import VideoDetails from "./videoDetails";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("Cartoon");
  }

  onSearchSubmit = async term => {
    const response = await Youtube.get("/search", { q: term });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onSelectedVideo = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <DisplaySearch onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onSelectedVideo={this.onSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
