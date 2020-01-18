import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    marginLeft: '10%',


  },
  mobileTable: {
    maxWidth: 650,


  },
  heading: {
    color: 'white',
    marginTop: 100,
    marginLeft: '10%'
  },
  mobileHeading: {
    color: 'white',
    marginTop: 100,

  },

});


/**
 * @param {data} array - comes from App component and displays chart data
 */

const Chart = ({ data }) => {
  const desktopScreen = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  if (!data.length) {
    return (
      <div>
        <h3 className={desktopScreen ? classes.heading : classes.mobileHeading}>Top tracks this week</h3>
        <p style={{ color: 'white', marginLeft: '10%' }}>loading tracks... </p>
      </div>
    )
  }
  return (
    <TableContainer style={{ overflow: 'hidden' }}>
      <h3 className={desktopScreen ? classes.heading : classes.mobileHeading}>Top tracks this week</h3>
      <Table className={desktopScreen ? classes.table : classes.mobileTable} aria-label="simple table">

        <TableBody>
          {data.slice(0, 5).map(track => (
            <TableRow key={track.id} >
              <TableCell component="th" scope="row" style={{ color: 'white', borderBottom: "none" }}>
                {track.position}
              </TableCell>
              <TableRow align="left" style={{ borderBottom: 'none' }}>
                <TableCell align="right" style={{ padding: 10, borderBottom: "none" }}><img style={{ height: 80, width: 80 }} src={track.artist.picture_small} alt="artist" /> </TableCell>
                <TableCell align="left" style={{ color: 'white', borderBottom: "none" }}>{track.title}<br />{track.artist.name}</TableCell>
              </TableRow>
              <TableCell align="left" style={{ color: 'white', borderBottom: "none" }}>{track.duration}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Chart;