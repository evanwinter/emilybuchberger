import React from "react"

const Video = ({ src, title, ...props }) => (
  <video autoPlay controls loop style={{ width: `100%` }}>
    <source src={src} type="video/mp4" />
  </video>
)

export default Video
