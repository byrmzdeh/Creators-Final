import React from 'react'
import eventVideo from '../../video/event.mp4'
import './style.scss'

const VideoEvent = () => {
  return (
    <div className="video-event">
        <video src={eventVideo} autoPlay></video>
        <div className="write">
            <h1>COMPANY’S FAMOUS BRAND <br /> ANNIVERSARY CELEBRATIONS TO <br /> CONTINUE WITH BIG PARTY</h1>
            <button>View The Gallery</button>
        </div>

    </div>
  )
}

export default VideoEvent
