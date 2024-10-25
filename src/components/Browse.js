import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../hooks/getNewMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/getPopularMovies'
import useGetTopMovies from '../hooks/getTopMovies'
import useUpcomingMovies from '../hooks/getUpcomingMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

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