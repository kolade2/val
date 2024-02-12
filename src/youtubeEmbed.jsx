import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    {/* <iframe width="1060"
      height="500"
      src={`https://www.youtube.com/embed/-${embedId}?si=QtpEoSoSOU7Q09ye`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen="true"> 
      </iframe> */}

      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${embedId}?si=7MOWnGv_AvbphbIw`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;