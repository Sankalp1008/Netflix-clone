import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <div className=' bg-black py-10 md:py-0'>
      <div className='mt-0 md:-mt-48 relative z-20'>
      <MovieList title ={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title ={"Popular"} movies={movies.popularMovies}/>
      <MovieList title ={"Top Rated"} movies={movies.topMovies}/>
      <MovieList title ={"Upcoming "} movies={movies.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer