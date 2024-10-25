import React from 'react'

const VIdeoTitle = ({title , overview}) => {
  return (
    <div className='text-center md:text-left w-full pt-[35%] md:pt-[20%] px-6 md:px-24 absolute aspect-video text-white bg-gradient-to-r from-black drop-shadow-xl'>
     <h1 className='text-xl py-2 md:py-0 md:text-5xl font-bold uppercase drop-shadow-xl'>{title}</h1>
     <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
     <div>
        <button className='bg-white text-black py-1 md:py-2 px-6 rounded-md bg-opacity-100 hover:bg-opacity-70 drop-shadow-2xl font-semibold'>▶️ Play</button>
        <button className=' bg-gray-500 mx-2 py-1 md:py-2 px-6 text-white rounded-md bg-opacity-20 hover:bg-opacity-90 font-semibold'>More Info</button>
     </div>
    </div>
  )
}

export default VIdeoTitle