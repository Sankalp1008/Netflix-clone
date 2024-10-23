import { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { API_Options } from "./constants"
import { getNowPlayingMovies } from "./moviesSlice"

const useGetNowPlayingMovies=()=>{
    const dispatch = useDispatch()
    const nowPlaying =()=>{
      axios.get('https://api.themoviedb.org/3/movie/now_playing?page=1',API_Options )
      .then((res)=>{
        dispatch(getNowPlayingMovies(res.data.results))
      })
    }
  
    useEffect(()=>{
      nowPlaying()
    },[])
}

export default useGetNowPlayingMovies
