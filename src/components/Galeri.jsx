"use client"
import React, { useEffect, useState } from 'react';

const Galeri = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
   
    const videoFiles = [
      'video1.mp4',
      'video2.mp4',
      'video3.mp4',
      'video5.mp4',
      'video6.mp4',
      'video7.mp4',
      'video8.mp4',

    ];
    setVideos(videoFiles);
  }, []);

  return (
    <div className="w-full md:w-2/4 mx-auto min-h-full py-20 bg-zinc-900">
      {videos.map((video, index) => (
        <div key={index} className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}` }>
          <video width="320" height="240" controls>
            <source src={`/${video}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default Galeri;