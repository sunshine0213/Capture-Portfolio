import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { Description } from "../styles";

const VideoContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const Video = styled(motion.video)`
  -webkit-filter: blur(7px);
  -o-filter: blur(7px);
  -moz-filter: blur(7px);
  -ms-filter: blur(7px);
  filter: blur(7px);
`;

const Content = styled.div`
  position: absolute;
  display: inline-block;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  color: #fff;
  width: 100%;
  text-align: center;
  z-index: 999;
`;
const Play = styled.div`
  font-size: 50px;
  cursor: pointer;
  border: 1px solid #fff;
  display: inline-block;
  text-align: center;
  padding: 5px 25px;
`;

const OurSuccess = () => {
  return (
    <VideoContainer>
      <Description>
        <h2 style={{ textAlign: "center", marginBottom: "5rem" }}>
          Our <span>Work</span> speaks for <span>Us</span>
        </h2>
      </Description>
      <Video
        width="100%"
        autoPlay
        disablePictureInPicture
        disableRemotePlayback
        loop
        preload="metadata"
      >
        <source
          src="https://player.vimeo.com/external/524033439.hd.mp4?s=22f1a7abade536bc83845b40d3181c97b8229d8d&profile_id=175"
          type="video/mp4"
        />
        Sorry, your browser doesn't support embedded videos.
      </Video>
      <Content>
        <Play>►</Play>
      </Content>
    </VideoContainer>
  );
};

export default OurSuccess;
