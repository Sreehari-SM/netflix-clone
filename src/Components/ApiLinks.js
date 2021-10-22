import axios from "axios"


export const MovieConfig = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});
export const ImageConfig = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});
export const TrendingMovieConfig = axios.create({
    baseURL: 'https://api.themoviedb.org/3/trending/all/',
});
export const api_key ="a8965ba42cd7519f42ff7ab6067bb692";
export const imageUrl = 'https://image.tmdb.org/t/p/original'
