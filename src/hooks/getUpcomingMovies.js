import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { API_Options } from "../utils/constants"
import {    getUpcomingMovies } from "../utils/moviesSlice"

const useUpcomingMovies=()=>{
    const upcoming_movies = useSelector((store)=>store.movies.upcomingMovies)
    const dispatch = useDispatch()
    const nowPlaying =()=>{
      axios.get('https://api.themoviedb.org/3/movie/upcoming?page=1',API_Options )
      .then((res)=>{
        dispatch(getUpcomingMovies(res.data.results))
      })
    }
  
    useEffect(()=>{
      nowPlaying()
    },[])
}

export default useUpcomingMovies
