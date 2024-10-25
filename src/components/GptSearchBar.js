import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utils/languageConstants'
// import client from '../utils/openAi'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { API_Options, GEMINI_API_KEY } from '../utils/constants'
import { addGptMovieResult } from '../utils/GptSlice'

const GptSearchBar = () => {
    const dispatch = useDispatch()
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const searchText = useRef(null)
    const langKey = useSelector((store) => store.config.lang)

    const getSearchedMovies = async(item) => {
const data = 
        await fetch(`https://api.themoviedb.org/3/search/movie?query=${item}&include_adult=false&language=en-US&page=1`, API_Options)
        const json = await data.json()
        return json.results
    }

    const handleOpenAI = () => {
        geminiAI()
    }

    const geminiAI = async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ", only give me names of 5 movies, comma seperated like the example result : Inception , Baby Driver , Deadpool , Venom , Batman "
        const data = await model.generateContent(`${gptQuery}`)
        const response = await data.response
        const text = response.text()
        const movieList = text.split(",")
        const movieForSearch = movieList.map((item) => getSearchedMovies(item))
        const promiseArray = await Promise.all(movieForSearch)
        console.log(promiseArray)
        dispatch(addGptMovieResult({ movieNames:movieList ,movieResults:promiseArray}))

    }

    return (
        <div className=' pt-[24%] md:pt-[10%] flex justify-center '>
            <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-1/2 bg-black grid grid-cols-12'>
                <input
                    ref={searchText}
                    type='text'
                    name='search'
                    placeholder={lang[langKey].gptSearchPlaceholder}
                    className='col-span-8 md:col-span-9 p-2 md:p-4  m-4 rounded-md placeholder:text-xs md:placeholder:text-lg '
                />
                <button onClick={handleOpenAI} className='col-span-4 md:col-span-3 bg-red-800 text-white m-4 px-4 py-2 rounded-lg'>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar