import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import { API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPlayingMovies, getTrailerVidoes } from '../utils/moviesSlice'
// import getCurrentPlayingMovies from '../hooks/getCurrentPlayingMovies'

const PlayTrailer = () => {
  const params = useParams()
  const id = params.slug
  const dispatch = useDispatch()
  const showGptSearch = useSelector((store)=> store.gpt)
  const trailerId = useSelector((store)=>store.movies?.currentPlayingMovies)
  const getMovieTrailer = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_Options)
        .then((res) => {
            const filteredType = res.data.results.filter((item) => item.type === "Trailer")
            const movieTrailer = filteredType.length ? filteredType[0] : res.data.results[0]
            dispatch(getCurrentPlayingMovies(movieTrailer))
        })
        .catch((error) => {
          console.error("Failed to fetch movie trailer:", error);
        });
}
React.useEffect(() => {
   getMovieTrailer()
}, [id])
  return (
    <>
    
    <div className='w-full'>
        
        <iframe
            className='w-full aspect-video'
             src={"https://www.youtube.com/embed/"+trailerId?.key+"?&autoplay=1&mute=1"}
             title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" >

             </iframe>
    </div>
    </>
  )
}

export default PlayTrailer