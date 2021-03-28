import React from 'react'
import Row from '../components/Row';
import Banner from '../components/Banner';
import requests from '../assets/requests';
import Nav from '../components/Nav';

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
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title='Action Movies' fetchUrl={requests.fetchActionsMovies} isLargeRow />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} isLargeRow />
    </>
  )
}

export default OpenedCinema
