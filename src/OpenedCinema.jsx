import React from 'react'
import Row from './Row';
import Banner from './Banner';
import requests from './requests';
import Nav from './Nav';

function OpenedCinema() {
    return (
    <>
      <Nav />
      <Banner />
      <Row  
            title='NETFLIX Originals' 
            fetchUrl={requests.fetchNewflixOriginals} 
            isLargeRow
      />
      <Row  title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row  title='Action Movies' fetchUrl={requests.fetchActionsMovies} />
      <Row  title='Comedt Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row  title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row  title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row  title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </>
    )
}

export default OpenedCinema
