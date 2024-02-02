// VideoSection.js
import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import video1 from '../assets/WhatsApp Video 2023-08-29 at 10.58.12 PM.mp4';

const videoData = [
  {
    title: 'Client Review 1',
    videoUrl: video1,
  },
  // Add more videos as needed
];

const VideoSectionContainer = styled.section`
  text-align: center;

  padding: 40px;
`;

const VideoWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const VideoCard = styled.div`
  margin-bottom: 20px;
`;

const VideoSection = () => {
  return (
    <VideoSectionContainer>

    <VideoWrapper>
      {videoData.map((video, index) => (
        <VideoCard key={index}>
          
          <video controls  width="100%" height="300px">
            <source src={process.env.PUBLIC_URL + video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoCard>
      ))}
    </VideoWrapper>
  </VideoSectionContainer>
  );
};

export default VideoSection;
