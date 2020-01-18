import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  title: {

    color: 'white',
  },
  paper: {
    background: "black",
    color: 'white',
  },
  divider: {
    backgroundColor: 'white'
  },
});


/**
 * Drawer navbar component for displaying navbar on mobile and smaller devices
 */



const DrawerNavbar = () => {
  const [left, setLeft] = React.useState(false);
  const classes = useStyles();
	/**
	 * @param  {} open - toggles drawer and sets state to true or false depending on drawer position
   * created as function so it's easier to expand
	 */
  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setLeft(open);
  };

  /**
   * //handles drawer design and displays drawer menu text and buttons
   */
  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List >
        <IconButton aria-label="delete" onClick={toggleDrawer(false)} style={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>

        {['Discover', 'Browse', 'Stream', 'Charts'].map((text, index) => (

          <ListItem button key={text} >

            <ListItemText primary={text} />

          </ListItem>

        ))}
      </List>
      <Divider className={classes.divider} />
      <List>
        {['Shop', 'News', 'Purchase'].map((text, index) => (
          <ListItem button key={text}>

            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <div>
      <IconButton aria-label="drawer" onClick={toggleDrawer(true)} style={{ color: 'white' }}>
        <MenuIcon />
      </IconButton>
      <IconButton edge="start" color="inherit" aria-label="menu" style={{ color: 'white' }}>
        <PlayCircleFilledIcon />
      </IconButton>
      <Typography variant="inherit" className={classes.title}>
        MusicGenie
          </Typography>

      <Drawer open={left} onClose={toggleDrawer(false)} classes={{ paper: classes.paper }}>
        {sideList('left')}
      </Drawer>
    </div>
  )
}

export default DrawerNavbar;