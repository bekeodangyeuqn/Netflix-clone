import React, { useEffect, useState } from 'react';
import axios from '../axios'
import modules from './Row.module.css'
import clsx from 'clsx';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title,fetchUrl,isLargePath}) {
   const [movies,setMovies] =  useState([])
   const [trailerUrl,setTrailerUrl] = useState("")
   const baseUrl = 'https://image.tmdb.org/t/p/original'
   const posterClasses = clsx(modules.rowPoster,{
       [modules.rowPosterLarge]: isLargePath
   })
   useEffect(() => {
    async function fetchData() {
        const requests = await axios.get(fetchUrl)
        // console.table(requests.data.results)
        setMovies(requests.data.results)
        return requests
    }
    fetchData()
   },[])

   console.log(movies);
   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      origin: 'http://localhost:3000' 
    },
  }
  const handleTrailer = (movie) => {
    if (trailerUrl){
        setTrailerUrl('')
    } else {
        movieTrailer(movie?.original_title || '')
            .then(url => {
                console.log(movie?.original_title,url)
                const urlParam = new URLSearchParams(new URL(url).search) 
                setTrailerUrl(urlParam.get('v'))
            })
            .catch(error => console.log(error)) 
    }
  }
  console.log(trailerUrl)
    return (
        <div className={modules.row}>
            <h2 className={modules.rowTitle}>{title}</h2>
            <div className={modules.rowPosters}>
                {
                    movies.map((movie) => {
                        return (
                            <img className={posterClasses} 
                            onClick={() => {
                                 handleTrailer(movie);
                                console.log(movie.original_title)
                                
                            }}
                                src={`${baseUrl}${isLargePath ? movie.poster_path :
                                 movie.backdrop_path}`} 
                                 alt={movie.name}
                            key={movie.id}/>
                        )
                    })
                }
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
}

export default Row;

