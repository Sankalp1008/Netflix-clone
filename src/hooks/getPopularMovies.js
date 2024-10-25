import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { API_Options } from "../utils/constants"
import {  getPopularMovies } from "../utils/moviesSlice"

const usePopularMovies=()=>{
  const popular_movies = useSelector((store)=> store.movies.popularMovies)
    const dispatch = useDispatch()
    const nowPlaying =()=>{
      axios.get('https://api.themoviedb.org/3/movie/popular?page=1',API_Options )
      .then((res)=>{
        dispatch(getPopularMovies(res.data.results))
      })
    }
  
    useEffect(()=>{
      if(!popular_movies) nowPlaying()
    },[])
}

export default usePopularMovies
