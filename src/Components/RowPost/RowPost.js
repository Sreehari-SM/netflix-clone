import React,{useEffect,useState} from 'react';
import { MovieConfig,ImageConfig,api_key,imageUrl} from '../ApiLinks';
import './RowPost.css'
function RowPost(props) {
    const [movies, setMovies]= useState([]);
    useEffect(() => {
       if(props.type === "poster"){
        ImageConfig.get(`discover/tv?api_key=${api_key}&with_networks=213`).then((response)=>{
            console.log(response.data.results);
            setMovies(response.data.results)
        })
       }
       if(props.type === "small"){
        ImageConfig.get(`/trending/all/week?api_key=${api_key}&language=en-US`).then((response)=>{
            console.log(response.data.results);
            setMovies(response.data.results)
        })
       }
    }, [])
    const posters =()=>{
     return  movies.map((movie)=>{
           return <img className={props.type} alt='poster' src={`${imageUrl+movie.backdrop_path}`} />
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {posters()}
            </div>
        </div>
    )
}

export default RowPost
