import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { API_Options } from "../utils/constants"
import { getNowPlayingMovies } from "../utils/moviesSlice"

const useGetNowPlayingMovies=()=>{
  const now_playing_movies = useSelector((store)=> store.movies.nowPlayingMovies)
    const dispatch = useDispatch()
    const nowPlaying =()=>{
      axios.get('https://api.themoviedb.org/3/movie/now_playing?page=1',API_Options )
      .then((res)=>{
        dispatch(getNowPlayingMovies(res.data.results))
      })
    }
  
    useEffect(()=>{
      !now_playing_movies && nowPlaying()
    },[])
}

export default useGetNowPlayingMovies
