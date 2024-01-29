import React, { useEffect } from 'react'
import './VideoHero.css';
import video1 from '../Video/restrovideo1.mp4';
import video2 from '../Video/video2.mp4';
import video3 from '../Video/video3.mp4';
import video4 from '../Video/video4.mp4';
import video5 from '../Video/video5.mp4';
import { useState } from 'react';


const videos = [video1, video2, video3, video4, video5];

const VideoHero = () => {
  
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const intervelIndex = setInterval(() => {
      setVideoIndex((previous) => {
        if (previous + 1 === videos.length) {
          return 0;
        }
        else {
          return previous + 1;
        }
      });
    }, 5000);
    return () => {
      clearInterval(intervelIndex);
    }
  }, []);
  

  return (
    <div className='video-container'>
      <div className='parent-container'>
        <video src={videos[videoIndex]} controls={false} autoPlay loop muted className='video-slide' id='video-slide' />
        <div className="video-content-container">
          <p>People who love to eat are always the best people</p>
        </div>
      </div>
    </div>
  )
}

export default VideoHero
