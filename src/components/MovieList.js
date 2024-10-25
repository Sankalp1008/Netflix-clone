import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-6 '>
            <h1 className='text-sm md:text-2xl font-bold py-4 text-white'>{title}</h1>

            <div className=' scrollbar-hidden flex overflow-x-scroll  '>
          
                <div className='flex'>
                    {movies && movies.map((item, idx) => (
                        <MovieCard
                            key={item.id}
                            img={item.poster_path}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default MovieList