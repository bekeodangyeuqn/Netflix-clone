import logo from './logo.svg';
import './App.css';
import Row from './components/Row'
import Banner from './components/Banner';
import Nav from './components/Nav'
import requests from './requests';
import YouTube from 'react-youtube';
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargePath/>
      <Row title='Trending now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;
