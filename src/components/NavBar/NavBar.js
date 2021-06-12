import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import logo from '../../asset/logo.png'
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "250px",
  },
  navBar: {
    background: 'none',
    boxShadow: 'none'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& h4': {
      fontWeight: 'bold'
    }
  },
  link: {
    '& > *': {
      margin: theme.spacing(0, 3),
      borderRadius: '0px'
    },
    '& .active': {
      borderBottom: 'solid 2px #00dbd0;'
    }
  },
  btn: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1, 4),
    borderRadius: '10px'
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Box style={{ flexGrow: 1 }} className={classes.logo}>
            <img width='50px' src={logo} alt="logo" />
            <Typography color='textPrimary' variant="h4">
              organic
            </Typography>
          </Box>
          <Hidden smDown>
            <Box className={classes.link}>
              <Button className='active' component={Link} to="/" >Home</Button>
              <Button>Products</Button>
              <Button>Blog</Button>
              <Button>About Us</Button>
              <Button className={classes.btn} variant='outlined' color='primary'>Contact</Button>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Box>
              <IconButton onClick={() => setOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Drawer open={open} onClose={() => setOpen(false)}>
              <List disablePadding className={classes.drawer}>
                <ListItem button>
                  <ListItemText primary="News" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Destination" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Blog" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>

        <ScrollToTop showBelow={250} />
      </AppBar>
    </Container>
  );
};

export default NavBar;
