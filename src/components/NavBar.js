import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {

  },
  title: {
    marginRight: theme.spacing(4),
  },
  menu: {
    flexGrow: 1,
  },
}));

/**
 * Navbar component for displaying navbar for desktop screens
 */

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <PlayCircleFilledIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MusicGenie
          </Typography>
          <div className={classes.menu}>
            <Button color="inherit">Discover</Button>
            <Button color="inherit">Browse</Button>
            <Button color="inherit">Stream</Button>
            <Button color="inherit">Charts</Button>
            <Button color="inherit">Shop</Button>
            <Button color="inherit">News</Button>
            <Button color="inherit">Purchase</Button>
          </div>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <SearchIcon />
          </IconButton>

          <Button color="inherit">Signin</Button>
          <Button color="inherit">Signup</Button>

        </Toolbar>

      </AppBar>
    </div>
  )
}

export default NavBar;