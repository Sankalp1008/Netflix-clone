import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerMovies:null,
    },
    reducers:{
        getNowPlayingMovies:(state ,action)=>{
           state.nowPlayingMovies = action.payload
        },

        getTrailerVidoes:(state,action)=>{
            state.trailerMovies=action.payload
        }
    }
})

export const {getNowPlayingMovies , getTrailerVidoes} = movieSlice.actions
export default movieSlice.reducer