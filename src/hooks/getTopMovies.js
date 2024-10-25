import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { API_Options } from "../utils/constants"
import {   getTopMovies } from "../utils/moviesSlice"

const useGetTopMovies=()=>{
    const top_movies = useSelector((store)=>store.movies.topMovies)
    const dispatch = useDispatch()
    const nowPlaying =()=>{
      axios.get('https://api.themoviedb.org/3/movie/top_rated?page=1',API_Options )
      .then((res)=>{
        dispatch(getTopMovies(res.data.results))
      })
    }
  
    useEffect(()=>{
        !top_movies && nowPlaying()
    },[])
}

export default useGetTopMovies
