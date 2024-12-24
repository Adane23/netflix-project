import React from 'react';
import Row from './Components/Row';
import "./App.css";
import requests from './requests';
import Banner from "./Components/Banner"
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner /> 

      <Row 
        title="NETFLIX ORIGINAL" 
        fetchUrl={requests.fetchNetflixOrginals} 
        isLargeRow
      />

      <Row 
        title="Trending Now"
        fetchUrl={requests.fetchTreading}
      />
      
      <Row 
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
      />

      <Row 
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />

      <Row 
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />

      <Row 
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />

      <Row 
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />

      <Row 
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />

    </div>
  );
}
//API key: da2cfda538583ce780dc404075be7987
//How to make API Request=> https://api.themoviedb.org/3/movie/550?api_key=da2cfda538583ce780dc404075be7987
export default App;

//deploy url : https://netflix-clone-92ac8.web.app

