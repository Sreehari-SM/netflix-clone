import React, {useEffect, useState} from 'react'
import './Banner.css';
import {MovieConfig, api_key ,imageUrl} from "../ApiLinks"
function Banner() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        MovieConfig.get(`trending/all/week?api_key=${api_key}&language=en-US`).then((response)=>{
            console.log(response.data.results);
            setMovies(response.data.results[Math.floor(Math.random()*response.data.results.length)])
           const interval = setInterval(() => {
                setMovies(response.data.results[Math.floor(Math.random()*response.data.results.length)]) 
            }, 5000);
            
        })
    }, [])
    const renderMovies =()=>{
            return <>
                <div className='content' >
                    <h1 className='title'>{movies.title || movies.name}  </h1>
                    <div className='banner_buttons' >
                        <button className='button' >Play</button>
                        <button className='button' >My list</button>
                    </div>
                    <h1 className='description'>{movies.overview}</h1>
                </div>
                <div className="fade_bottom"></div>
             </>
    }
    return (
        <div style={{backgroundImage:`url(${imageUrl+movies.backdrop_path})`}}
         className='banner'>
          
            {renderMovies()}
        </div>
    )
}

export default Banner
