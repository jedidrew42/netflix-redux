// Typically we would store in {process.env.API_KEY}
const API_KEY = "a18cce91641c7b9c3b94b0b25f274bf8";

const requests = {
        fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
        fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
        fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
        fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
        fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
    };

    export default requests;

