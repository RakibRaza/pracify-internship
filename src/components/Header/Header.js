import { Button, Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react'
import NavBar from '../NavBar/NavBar'
import flower from '../../asset/header.png'
import flower2 from '../../asset/header-2.png'
import { useStyles } from './HeaderStyle';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <NavBar />
        <Grid container justify='center' spacing={4} className={classes.container}>
          <Grid component={Box} alignSelf="flex-start" item xs={12} md={5}>
            <Typography gutterBottom variant='h4'>Healthy life with</Typography>
            <Typography variant="h3" gutterBottom>
              Nature Organic
            </Typography>
            <Box maxWidth={380}>
              <Typography paragraph>
                Vegetables are the edible parts of a plant
                that is used in cooking or can be eaten now.
              </Typography>
            </Box>
            <Button className={classes.btn} variant="contained" color="primary">Explore Now</Button>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box className={classes.imgContainer}>
              <img className="flower" src={flower} alt="flower" />
              <div className={classes.flower2} >
                <img src={flower2} alt="flower2" />
              </div>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}

export default Header
