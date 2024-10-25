import React from 'react'
import { useSelector } from 'react-redux'
import VIdeoTitle from './VIdeoTitle'
import VideoBg from './VideoBg'

const MainContainer = () => {
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies)
    if(!movies) return

    const mainMovie = movies[0]

    const {original_title , overview ,id} = mainMovie 
  return (
    <div>
        <div className='pt-[30%] bg-black md:pt-0'> 
            <VIdeoTitle title = {original_title} overview={overview} />
            <VideoBg id = {id} />

        </div>
    </div>
  )
}

export default MainContainer