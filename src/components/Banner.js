import React, { useEffect, useState } from 'react';
import axios from '../axios'
import requests from '../requests'
import modules from './Banner.module.css'

const Banner = () => {
    const [movie,setMovie] = useState([])
    function traucated(str,n) {
        return str?.length > n ? str?.substr(0,n-1) + '...' : str
    }
    useEffect(() => {
        async function fectchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length - 1)
            ])
            return request
        }
        fectchData()
    },[])
    console.log(movie)
    return (
        <header className={modules.banner}
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center' 
            }}>
            <div className={modules.bannerContent}>
                <h1 className={modules.bannerTitle}>
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <div className={modules.bannerButtons}>
                <button className={modules.bannerButton}>Play</button>
                <button className={modules.bannerButton}>My list</button>
                </div>
                <h1 className={modules.bannerDescription}>{traucated(movie?.overview,150)}</h1>
            </div>
            <div className={modules.bannerFadeDown}></div>
        </header>
    );
}

export default Banner;

