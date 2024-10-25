import React, { useEffect } from 'react'
import axios from 'axios'
import { API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { getTrailerVidoes } from '../utils/moviesSlice'

const VideoBg = ({ id }) => {

    const dispatch = useDispatch()
    const trailerId = useSelector((store)=> store.movies?.trailerMovies)
    const getMovieTrailer = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_Options)
            .then((res) => {
                const filteredType = res.data.results.filter((item) => item.type === "Trailer")
                const movieTrailer = filteredType.length ? filteredType[0] : res.data.results[0]
                console.log(movieTrailer)
                dispatch(getTrailerVidoes(movieTrailer))
            })
    }

    useEffect(() => {
        !trailerId && getMovieTrailer()
    }, [])
    return (
        <div className='w-full'>
            <iframe
            className='w-full aspect-video'
             src={"https://www.youtube.com/embed/"+trailerId?.key+"?&autoplay=1&mute=1"}
             title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )
}

export default VideoBg