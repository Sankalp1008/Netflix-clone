import React,{useEffect} from 'react'
import logo from '../images/logo.png'
import userIcon from '../images/netflix-user.jpg'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleSearchGpt } from '../utils/GptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  const langConst = useSelector((store)=> store.gpt.showGptSearch)

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

  const handleGPTSearch = ()=>{
   dispatch(toggleSearchGpt())
  }

  const handleLanguage = (e)=>{
  dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-full px-8 py-1 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img 
        className='w-44 mx-auto md:mx-0'
        src={logo} alt="logo" />
        {user ? 
       <div className='p-2 flex justify-between'>
        {langConst && 
          <select onChange={handleLanguage} className='bg-gray-800 text-white rounded-lg px-2 m-2' > 
          {SUPPORTED_LANGUAGES.map((item,idx)=>(
            <option value={item.id} key={item.id}>{item.name}</option>
          ))}
        </select>
        }
      
        <button onClick={handleGPTSearch} className='bg-red-800  text-white rounded-lg py-2 px-4 my-2 mx-4'>
          {langConst ? "Homepage" : "AI Suggest"}
          </button>
       <img className=' hidden md:block w-8 h-8' src={user?.photoURL} alt="userIcon" />
          <button
          
          onClick={()=>{
            signOut(auth).then(() => {
              // Sign-out successful.              
            }).catch((error) => {
              // An error happened.
            });
          }}
          className=' px-0 md:flex md:px-2 text-white font-bold '>Sign Out</button>
      </div> :
      null  
      }
       
    </div>
  )
}

export default Header