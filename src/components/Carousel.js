import React from 'react';
import Slider from "react-slick";
import Fab from '@material-ui/core/Fab';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './Carousel.css'

/**
 * @param  {} props - handles props and design for next arrow button
 */
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <Fab
      variant="extended"
      size="small"
      color="primary"
      aria-label="Add"
      style={{ position: 'absolute', left: '97.5%', top: '45%', background: 'white' }}
      onClick={onClick}

    >
      <ArrowForwardIosIcon style={{ color: 'black' }} />

    </Fab>
  );
}

/**
 * @param  {} props - handles props and design for prev arrow button
 */

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <Fab
      variant="extended"
      size="small"
      color="primary"
      aria-label="Add"
      style={{ position: 'absolute', top: '45%', right: '98.5%', background: 'white', zIndex: 5 }}
      onClick={onClick}

    >
      <ArrowBackIosIcon style={{ color: 'black' }} />

    </Fab>
  );
}

const styles = {
  div: {
    width: '81%',
    marginLeft: '10%',
    marginTop: 100
  },
  desktopImage: {
    width: '95%',
    height: 180,
    borderRadius: 10,
  },
  mobileImage: {
    width: '75%',
    height: '170',
    borderRadius: 10,
  },

}
/**
 * @param  {} {featured - displays component category text
 * @param  {} arrows - sets arrows to true or false depending on component
 * @param  {} textAlign - sets text align properties of artist name and podcast description text
 * @param  {} data - handles data displayed- should always be an array}
 */
const Carousel = ({ featured, arrows, textAlign, data }) => {
  const desktopScreen = useMediaQuery('(min-width:600px)');
  var settings = {


    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: arrows,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div style={styles.div}>
      <h2 style={{ color: 'white' }}>{featured} </h2>

      <Slider {...settings}>
        {!data.length ? (<div> <CircularProgress style={{ color: 'white' }} /></div>) : data.map(artist =>
          <div key={artist.id}>

            <img style={desktopScreen ? styles.desktopImage : styles.mobileImage} src={artist.picture_medium} alt="featured artist" />
            <h3 style={{
              color: 'white',
              textAlign,
              whiteSpace: 'nowrap',
              width: '15ch',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }
            }>{artist.name || artist.title}</h3>

          </div>

        )}


      </Slider>

    </div>
  )
}

export default Carousel;