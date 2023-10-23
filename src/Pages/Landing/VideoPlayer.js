import React from 'react'
import ReactPlayer from 'react-player'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';


const VideoPlayer = (props) => {
  return (
    <>
    <ReactPlayer
    height="350px"
    width="350px"
    controls url="https://www.youtube.com/watch?v=o2gYjZlNSUY&t=46s"
    light={props.thumbnail}
    playIcon={<SlowMotionVideoIcon className='text-white' />}
    className="react_player"
    />
    
    </>   
  )
}

export default VideoPlayer;