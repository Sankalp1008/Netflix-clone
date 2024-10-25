import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovies = () => {
    const gptMovies = useSelector((store)=> store.gpt)

    const {movieResults , movieNames} = gptMovies

    if (!movieNames) return null
  return (
    <div className='p-4 mt-4 bg-black text-white bg-opacity-90 '>
        <div>
           
            {
                movieNames.map((movieName,idx) => <MovieList key={idx} title={movieName} movies={movieResults[idx]}/>)
            }
        </div>
    </div>
  )
}

export default GptMovies