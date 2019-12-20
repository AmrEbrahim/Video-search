import React, { Component } from "react";
import "./VideoItem.css";
class VideoItem extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.onSelectedVideo(this.props.video)}
        className="video-item ui item"
      >
        <img
          className="ui small image"
          alt={this.props.video.snippet.title}
          src={this.props.video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header"> {this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
