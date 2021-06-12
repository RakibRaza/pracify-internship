import { Box, Typography, Container, Grid, Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import logo from '../../asset/service-logo.png'
import data from '../../data/blog'

const useStyles = makeStyles(theme => ({
  blog: {
    '& img': {
      display: 'block', width: '100%', borderRadius: '20px 20px 0 0', marginBottom: '20px'
    },
    '& button': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      borderRadius: '0px'
    }
  }
}))
const Blog = () => {
  const [blog] = useState(data)
  const classes = useStyles()

  return (
    <Box pb={10}>
      <Container>
        <Box align='center' mb={1}>
          <img src={logo} alt="logo" />
        </Box>
        <Typography variant="h4" gutterBottom align="center">
          Read Our Blog
        </Typography>
        <Typography align="center" color='textSecondary' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Box mt={8}>
          <Grid container justify='center' spacing='4'>
            {blog.map(item => <Grid item xs={12} sm={6} md={3}>
              <Box align='center' className={classes.blog}>
                <img src={item.image} alt={item.title} />
                <Typography color='primary' variant='h6' gutterBottom>{item.title}</Typography>
                <Typography color='textSecondary' paragraph>{item.desc}</Typography>
                <Button>Read More</Button>
              </Box>
            </Grid>)}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Blog
