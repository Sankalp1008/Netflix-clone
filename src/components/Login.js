import React, { useState } from 'react'
import bgImg from  '../images/bg-netflix.jpg'
import Header from './Header'
const Login = () => {

    const [isSignIn , setIsSignIn] = useState(true)

    const handleToggle = () =>{
        setIsSignIn((prev)=>!prev)
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src={bgImg} alt="bg"/>
        </div>

        <form className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black-rgba text-white'>
        <h1 className='font-bold text-3xl  py-4'> {isSignIn ? 'Sign In' : 'Sign Up'}</h1>
  
        {!isSignIn &&<input 
    type='text'
    placeholder='Name'
    className='p-4 my-2 w-full bg-transparent border rounded-md'
   />
}
   <input 
    type='email'
    placeholder='Email '
    className='p-4 my-2 w-full bg-transparent border rounded-md'
   />



<input 
    type='password'
    placeholder='Password'
    className='p-4 my-2 w-full bg-transparent border rounded-md'
   />

   <button className='p-2 my-2 bg-red-700 w-full rounded-md'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
   <div className='flex justify-center p-2  w-full'>
            Forgot Password ?
        </div>
        {isSignIn ? 
        <div className='my-4'>
            
            New to Netflix ? <span onClick={handleToggle} className='font-bold cursor-pointer'> Sign Up Now </span>
        </div> : 
 <div className='my-4'>
            
 Already an user ? <span onClick={handleToggle} className='font-bold cursor-pointer'> Log In Now </span>
</div>

}
        </form>
       
    </div>
  )
}

export default Login