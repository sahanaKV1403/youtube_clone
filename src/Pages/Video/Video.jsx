import React from 'react'
import './Video.css'
import {useParams} from 'react-router-dom'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
const Video = () => {
  const {videoId,categoryId}=useParams();
//  video played is based on videoID and categoryID which should be available on the URL. 
// Hook helps to access the parameters of the current route to manage the dynamic routes in the URL. 
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video