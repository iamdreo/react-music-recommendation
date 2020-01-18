import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Carousel from './components/Carousel';
import Events from './components/Events';
import NavBar from './components/NavBar';
import News from './components/News'
import Chart from './components/Table';
import DrawerNavbar from './components/DrawerNavbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { getChart } from './services/getMusicData'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Quicksand'
    ].join(','),
  }
});
/**
Contains the whole application state, fetches data and pass it to individual components
 */

function App() {
  const [chart, setChart] = useState([])
  const [featuredArtists, setFeaturedArtists] = useState([])
  const [featuredPodcasts, setFeaturedPodcasts] = useState([])
  const desktopScreen = useMediaQuery('(min-width:600px)');

  /**
   * function to fetch data from api and update the application state
   */

  const getTopTracks = () => {
    getChart().then(result => {
      setChart(result.tracks.data)
      setFeaturedArtists(result.artists.data)
      setFeaturedPodcasts(result.podcasts.data)
    }).catch(error => {
      console.log(error)
    })
  }



  useEffect(() => {
    getTopTracks()

  }, [])



  return (
    <ThemeProvider theme={theme}>
      <div >
        <div className="App">
          {desktopScreen ? <NavBar /> : <DrawerNavbar />}

          <div className="App-text">
            <h1 id="banner-heading">Amazing Songs</h1>

            <p id="banner-text">Lorem ipsum in voluptate ut dolor dolore sint cupidatat enim cupidatat reprehenderit<br /> duis id irure laboris voluptate laboris fugiat reprehenderit anim anim est sunt reprehenderit ex fugiat tempor pariatur deserunt amet proident et.</p>

          </div>

        </div>
        <div className="App2">
          <Button variant="contained" size="medium" style={{ borderRadius: 50, height: '5vh', left: '10%', marginTop: 20 }}>
            New Arrival
        </Button>


          <Carousel arrows={true} featured="Featured Artists" textAlign="none" data={featuredArtists} />


          <Carousel arrows={false} featured="Podcasts" textAlign="center" data={featuredPodcasts} />

          <div className="chart-grid">
            <div >
              <Chart data={chart} />
            </div>

            <div>

              <Events />
              <News />
            </div>

          </div>
          <footer>
            <p style={{ paddingTop: 20 }}>Made with love for react</p>
          </footer>
        </div>


      </div>

    </ThemeProvider>

  );
}

export default App;
