import { Box, Container, Typography, TextField, Button, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
  form: {
    position: "relative",
    margin: theme.spacing(10, 0),
    "& button": {
      position: "absolute",
      right: "0px",
      padding: '24px 48px',
      borderRadius: '80px',
      boxShadow: 'none',
      color: '#fff',
      '&:hover': {
        boxShadow: 'none'
      }
    },
    '& .MuiInputBase-root': {
      borderRadius: '80px',
      padding: '8px 0'
    }
  }
}))

const NewsLetter = () => {
  const classes = useStyles()
  return (
    <Box pt={10} pb={5}>
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Subscribe to Our Newsletter
        </Typography>
        <Typography align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Container maxWidth='sm'>
          <form className={classes.form}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email address"
            />
            <Button color='primary' variant="contained">Subscribe</Button>
          </form>
        </Container>
      </Container>
    </Box>
  )
}

export default NewsLetter
