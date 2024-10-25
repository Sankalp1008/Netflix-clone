import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({img}) => {
    if(!img) return null
  return (
    <div className='w-32 md:w-48 pr-4'>
        <img src={IMG_URL+img} alt='poster'/>
    </div>
  )
}

export default MovieCard