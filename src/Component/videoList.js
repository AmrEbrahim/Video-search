import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  render() {
    return (
      <div className="ui list">
        {this.props.videos.map(video => (
          <VideoItem
            key={video.id.videoId}
            video={video}
            onSelectedVideo={this.props.onSelectedVideo}
          />
        ))}
      </div>
    );
  }
}

export default VideoList;
