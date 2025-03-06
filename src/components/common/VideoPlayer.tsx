import React from 'react'

export default function VideoPlayer() {
  return (
    <video src="/TRAILER.mp4" controls loop autoPlay className=' w-full max-w-[1200px] aspect-video'>
      <source src="/TRAILER.mp4" type="video/mp4" />
    </video>
  )
}
