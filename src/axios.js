// create and configure an instance of axios, a popular JavaScript library for making HTTP requests. 

//This line imports the axios library, which is necessary to use its functionality in your code.
import axios from "axios";

//an instance of axios is created with a custom configuration. 
const instance = axios.create({
    //The base_URL property is set to "https://api.themoviedb.org/3". This URL is the base path to the movie database API you're interacting with.
    baseURL: "https://api.themoviedb.org/3",
    //By setting the baseURL, you ensure that all requests made using this instance will automatically prepend the specified URL, making the request code cleaner and more manageable.
});
//instance.get("/movie/top_rated")
//this will create 
//https://api.themoviedb.org/3/movie/top_reated
export default instance;

