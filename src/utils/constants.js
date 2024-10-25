export const API_Options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_URL = 'https://image.tmdb.org/t/p/w500'

  export const SUPPORTED_LANGUAGES = [
    {id:'en' , name:'English'},
    {id:'hindi' , name:'Hindi'},
    {id:'spanish' , name:'Spanish'},

  ]

//   export const OPEN_API_KEY = "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"
  export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY