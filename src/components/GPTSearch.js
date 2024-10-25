import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovies from './GptMovies'
import bgImg from '../images/bg-netflix.jpg'

const GPTSearch = () => {
  return (
    <>
    <div className=' fixed -z-10 w-full '>
    <img src={bgImg} className='h-screen object-cover w-full'  alt="bg" />
</div>
    <div className='pt-[20%] md:pt-0'>
         
        <GptSearchBar/>
        <GptMovies/>
    </div>
    </>
  )
}

export default GPTSearch