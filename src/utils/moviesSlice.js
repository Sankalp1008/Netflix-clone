import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerMovies:null,
        popularMovies:null,
        topMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        getNowPlayingMovies:(state ,action)=>{
           state.nowPlayingMovies = action.payload
        },

        getTrailerVidoes:(state,action)=>{
            state.trailerMovies=action.payload
        },
        getPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        getTopMovies:(state ,action)=>{
            state.topMovies=action.payload
        },
        getUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        }
    }
})

export const {getNowPlayingMovies , getTrailerVidoes , getPopularMovies , getTopMovies , getUpcomingMovies} = movieSlice.actions
export default movieSlice.reducer