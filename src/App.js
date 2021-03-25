import React from "react";
import "./App.css";
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <h1>Kino Bar</h1>
      <Row  
            isLargRow={true}
            title='NETFLIX Originals' 
            fetchUrl={requests.fetchNewflixOriginals} />
      <Row  title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row  title='Action Movies' fetchUrl={requests.fetchActionsMovies} />
      <Row  title='Comedt Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row  title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row  title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row  title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
