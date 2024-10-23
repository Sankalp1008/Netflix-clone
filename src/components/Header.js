import React,{useEffect} from 'react'
import logo from '../images/logo.png'
import userIcon from '../images/netflix-user.jpg'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  useEffect(()=>{
   const onSignUp= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email , displayName , photoURL} = user;
        //  dispatch({uid:uid , email:email , displayName:displayName})
        dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL:photoURL}))
        navigate('/browse')
        // ...
      } else {
        dispatch(removeUser())
        navigate('/')
        // User is signed out
        // ...
      }
    });
    return ()=> onSignUp()
  },[])
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44'
        src={logo} alt="logo" />
        {user ? 
       <div className='p-4 flex'>
       <img className='w-8 h-8' src={user?.photoURL} alt="userIcon" />
          <button
          onClick={()=>{
            signOut(auth).then(() => {
              // Sign-out successful.              
            }).catch((error) => {
              // An error happened.
            });
          }}
          className='text-white font-bold px-2'>Sign Out</button>
      </div> :
      null  
      }
       
    </div>
  )
}

export default Header