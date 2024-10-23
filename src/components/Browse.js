import React, { useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { getNowPlayingMovies } from '../utils/moviesSlice'
import useGetNowPlayingMovies from '../utils/getNewMovies'
import MainContainer from './MainContainer'

const Browse = () => {
useGetNowPlayingMovies()

  return (
    <>
    <Header/>
    <MainContainer/>
    
    </>
  )
}

export default Browse