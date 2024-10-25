import React, { useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { getNowPlayingMovies } from '../utils/moviesSlice'
import useGetNowPlayingMovies from '../hooks/getNewMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/getPopularMovies'
import useGetTopMovies from '../hooks/getTopMovies'
import useUpcomingMovies from '../hooks/getUpcomingMovies'
import GPTSearch from './GPTSearch'

const Browse = () => {
  const showGptSearch = useSelector((store)=> store.gpt)
useGetNowPlayingMovies()
usePopularMovies()
useGetTopMovies()
useUpcomingMovies()
  return (
    <>
    <Header/>
    {showGptSearch.showGptSearch ?
    <GPTSearch/> : 
    <>
    <MainContainer/>
    <SecondaryContainer/>
    </>
}
   
    </>
  )
}

export default Browse