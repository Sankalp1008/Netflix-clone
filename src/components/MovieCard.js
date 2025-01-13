import React from 'react'
import { IMG_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({img , id}) => {
  const navigate = useNavigate()
   
    if(!img) return null

    const handleClick = () =>{
     navigate(`/playing/${id}`)
    }
  return (
    <div onClick={handleClick}  className='w-32 md:w-48 pr-4 cursor-pointer'>
        <img src={IMG_URL+img} alt='poster'/>
    </div>
  )
}

export default MovieCard