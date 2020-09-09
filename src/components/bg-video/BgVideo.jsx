import React from 'react';

function BgVideo() {
  return (
    <div className='bg-video'>
      <video className='bg-video__content' autoPlay muted loop>
        <source src='img/video.mp4' type='video/mp4' />
        <source src='img/video.webm' type='video/webm' />
        Your browser is not supported!
      </video>
    </div>
  );
}

export default BgVideo;
