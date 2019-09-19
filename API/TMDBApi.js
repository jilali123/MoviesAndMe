// API/TMDBApi.js

const API_TOKEN = "7cb049d0ef732983bf546cb10b9cefc2";

export function getFilmsFromApiWithSearchedText(text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text

     return fetch(url)
         .then((response) => response.json())
         .catch((error) => console.error(error))

}