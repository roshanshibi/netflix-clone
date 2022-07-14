import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios';
import { API_KEY } from '../../Constants/constants';
import { imageUrl } from '../../Constants/constants';

function Banner() {
  const [movie, setMovie] = useState()
  
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      console.log(response.data.results[0])
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
    })
   
  },[])
  
  return (
    <div style={{backgroundImage : `url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name || movie.title : " "}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>More info</button>

            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
    <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner