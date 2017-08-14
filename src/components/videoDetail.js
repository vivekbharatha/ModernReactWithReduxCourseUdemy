import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Started the Engine, hold you sugar !</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9 video-player">
        <iframe src={ url } className="embed-responsive-item">
        </iframe>
      </div>
      <div className="video-details">
        <div>{ video.snippet.title }</div>
        <div>{ video.snippet.description }</div>
      </div>
    </div>
  );
}

export default VideoDetail;
