import React from 'react'
import VideoEvent from '../../components/VideoEvent'
import Special from '../../components/Special'
import { Helmet } from 'react-helmet'

const Events = () => {
  return (
    <div>
      <Helmet>
        <title>Events</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3995/3995725.png"
        />
      </Helmet>

      <VideoEvent />
      <Special />
    </div>
  )
}

export default Events
