import React from 'react'

const VIdeoTitle = ({title , overview}) => {
  return (
    <div className='w-full pt-[20%] px-24 absolute aspect-video text-white bg-gradient-to-r from-black'>
     <h1 className='text-5xl font-bold '>{title}</h1>
     <p className='py-6 text-lg w-1/4'>{overview}</p>
     <div>
        <button className='bg-white text-black py-2 px-6 rounded-md bg-opacity-100 hover:bg-opacity-70'>▶️ Play</button>
        <button className=' bg-gray-500 mx-2 py-2 px-6 text-white rounded-md bg-opacity-20 hover:bg-opacity-90'>More Info</button>
     </div>
    </div>
  )
}

export default VIdeoTitle