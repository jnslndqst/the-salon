import React from "react";

import "./video.css";

const Video = () => {
  const backgroundSource = require("../../assets/videos/background.mp4");
  const overlaySource = require("../../assets/videos/overlay.mp4");
  return (
    <div className="Container">
      <div className="foreground-video-container">
        <video autoPlay="autoplay" loop="loop" muted className="OverlayVideo">
          <source src={overlaySource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bakground-video-container">
        <video autoPlay="autoplay" loop="loop" muted className="Video">
          <source src={backgroundSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
