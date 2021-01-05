import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import './App.css';
import requests from './requests';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending' fetchUrl={requests.fetchTrending} />
      <Row title='Popular' fetchUrl={requests.fetchPopular} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Upcoming' fetchUrl={requests.fetchUpcoming} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
