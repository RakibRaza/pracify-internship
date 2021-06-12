import { Grid, makeStyles, Typography, IconButton } from "@material-ui/core";
import React from "react";
import logo from '../../asset/footer-logo.png'
import backgroundImage from '../../asset/footer-bg.png'
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
  footer: {
    background: `url(${backgroundImage}) no-repeat`,
    padding: theme.spacing(17, 0, 7),
    backgroundSize: 'cover',
    color: '#fff',
    '& a': {
      color: '#fff',
      display: 'block',
      textDecoration: 'none',
      marginTop: theme.spacing(3),
      fontSize: '14px',
    },
  },
  underline: {
    width: '80px',
    height: '3px',
    background: theme.palette.primary.main,
    margin: theme.spacing(1, 0)
  },
  icon: {
    '& > *': {
      color: theme.palette.secondary.main,
      background: '#fff',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
      padding: '3px',
      cursor: 'pointer'
    }
  }
}));
function Copyright() {
  return (
    <Typography variant="subtitle1">{"Copyright © "} {new Date().getFullYear()} Nature</Typography>
  );
}
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <img style={{ display: 'block', marginBottom: '30px' }} src={logo} alt="logo" />
            <Box mb={5}>
              <Typography >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Typography>
            </Box>
            <div className={classes.underline}></div>
            {Copyright()}
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant='h6'>Information</Typography>
            <div className={classes.underline}></div>
            <Typography component={Link} to='/'>About Us</Typography>
            <Typography component={Link} to='/'>Products</Typography>
            <Typography component={Link} to='/'>Contact Us</Typography>
            <Typography component={Link} to='/'>Terms of Service</Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Box mb={8}></Box>
            <Typography component={Link} to='/'>About Us</Typography>
            <Typography component={Link} to='/'>Products</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant='h6'>Follow Us</Typography>
            <div className={classes.underline}></div>
            <Box className={classes.icon}>
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
