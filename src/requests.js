//This line declares a constant variable API_KEY and assigns it a string value. This value is a unique key that is likely required to authenticate requests made to the movie/TV show data provider's API.
const API_KEY = "da2cfda538583ce780dc404075be7987";

//Requests Object (requests): This object contains different properties, each representing a specific type of data request. The values of these properties are URL paths that include the API_KEY for authentication. Each path specifies different parameters to fetch specific data from the API.
const requests ={
    
    fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

    fetchTreading: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    
}
//Each of these requests can be used in combination with a base URL of the API to make HTTP requests to the server hosting the API. The server will then respond with data corresponding to these requests, such as a list of movies or TV shows for each category.

export default requests;

