import React, { useRef, useState } from 'react'
import bgImg from '../images/bg-netflix.jpg'
import Header from './Header'
import checkValidData from '../utils/validate'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import logo from '../images/netflix-user.jpg'

const Login = () => {
    const dispatch = useDispatch()
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleToggle = () => {
        setIsSignIn((prev) => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        if(message) return

        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value,
                 photoURL: logo
              }).then(() => {
                const {uid, email , displayName , photoURL} = auth.currentUser;
                //  dispatch({uid:uid , email:email , displayName:displayName})
                dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL:photoURL}))
                // navigate('/browse')
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
           
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorMessage)
              // ..
            });
        }else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
            //   navigate('/browse')


              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorMessage)
            });
        }
    }


    return (
        <div className='bg-gradient-to-b from-black'>
            <Header />
            <div className='absolute'>
                <img className='h-screen object-cover w-screen' src={bgImg} alt="bg" />
            </div>

            <form onSubmit={handleSubmit} className='absolute w-full md:w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black-rgba text-white'>
                <h1 className='font-bold text-3xl  py-4'> {isSignIn ? 'Sign In' : 'Sign Up'}</h1>

                {!isSignIn &&
                    <input
                        ref={name}
                        type='text'
                        placeholder='Name'
                        className='p-4 my-2 w-full bg-transparent border rounded-md'
                    />
                }
                <input
                    ref={email}
                    type='email'
                    placeholder='Email '
                    className='p-4 my-2 w-full bg-transparent border rounded-md'
                />



                <input
                    ref={password}
                    type='password'
                    placeholder='Password'
                    className='p-4 my-2 w-full bg-transparent border rounded-md'
                />
                <p className='text-red-700 py-2 font-bold'>{errorMessage && errorMessage}</p>
                <button type='submit' className='p-2 my-2 bg-red-700 w-full rounded-md'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
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