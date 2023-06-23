import axios from 'axios';


// Base URL: https://api.themoviedb.org/3/
// URL key: movie/now_playing?api_key=c5f5fe78a13dab15560ae870f9a7ed2d

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;