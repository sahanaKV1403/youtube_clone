import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'
import { value_converter } from '../../data'
// import * as moment from 'moment';
const moment = require('moment')

const Feed = ({ category }) => {
  // based on the selected category the feed will be filled

  const [data, setData] = useState([]);
  //initial value is an empty array

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items));
  }
  // async makes a function return a Promise. await makes a function wait for a Promise. the response of promise(resolve/reject) is, 
  //converted to json. that json is now stored in data. items is an object containing required details.
  // The await keyword makes the function pause the execution and wait for a resolved promise before it continues.
  // until the videoList_url is fetched it shouldn't continue. URL is taken from API (APIs are often used to access, 
  //data from external sources, such as databases or third-party services like social media platforms or weather APIs.)
 
  useEffect(() => {
    fetchData();
  }, [category]);

  // useEffect is a React Hook that lets you synchronize a component with an external system. useEffect(setup, [dependencies]) returns undefined

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
            {/* This is to open up new page when clicked on particular video */}
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            {/* video title */}
            <h2>{item.snippet.title}</h2>
            {/* channel name */}
            <h3>{item.snippet.channelTitle}</h3>
            {/* total views and upload time */}
            <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
            {/* .fromNow() calculates no. of days before which the video was uploaded. */}
          </Link>
        )
      })}
    </div>

  )
}

export default Feed
//<a> tags will reload the page and re-render all the components. <Link> will re-render only updated components. 