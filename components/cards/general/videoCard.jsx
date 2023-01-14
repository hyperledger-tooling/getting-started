import React from 'react'
import classes from '../style.module.scss'

function videoCard() {
  return (
    <div className={classes.videoCard}>
      <iframe
        width="560"
        height="315"
        className={classes.videoCardContent}
        src="https://www.youtube.com/embed/Ma-SXmvwhM0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>

      </iframe>
    </div>
  )
}

export default videoCard