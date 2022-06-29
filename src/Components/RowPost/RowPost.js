import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl } from '../../Constants/constants';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    })
  })

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  
  const handleClick = (movie) => {
    if (trailerUrl) {
        setTrailerUrl('');
    } else {
        movieTrailer(movie?.title || "")
            .then((url) => {
                console.log(url);

                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get("v"));
            })
            .catch(err => console.log(err))
    }
}

  return (  
  
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {
            movies.map((obj)=>{
              return(<img onClick={()=>{handleClick(obj)}} className={props.isSmall ? 'smallPoster' : 'poster'} alt="Poster" src={`${imageUrl+obj.backdrop_path}`} />)
            })
          }

        </div>
        { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default RowPost