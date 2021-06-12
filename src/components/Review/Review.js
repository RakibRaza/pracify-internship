import React, { useState } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import logo from '../../asset/review-logo.png'
import data from '../../data/review'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Autoplay, Pagination])

const useStyles = makeStyles(theme => ({
  slide: {
    '& img': {
      display: 'block',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '20px'
    },
    '& p': {
      lineHeight: '3'
    },
    '& .swiper-pagination-bullet': {
      border: `solid 2px ${theme.palette.primary.main}`,
      background: '#fff',
      padding: '5px'
    },
    '& .swiper-pagination-bullet-active': {
      background: theme.palette.primary.main,
    }
  },
  icon: {
    color: theme.palette.primary.main
  }
}))

const Review = () => {
  const classes = useStyles()
  const [review] = useState(data)

  return (
    <Box py={10}>
      <Container>
        <Box align='center' mb={1}>
          <img src={logo} alt="logo" />
        </Box>

        <Swiper className={classes.slide} autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }} pagination={{
          "clickable": true
        }}>
          {review.map(user => <SwiperSlide key={user.id}>
            <Container maxWidth='sm'>
              <Box mt={3} mb={6} align='center'>
                <img src={user.image} alt={user.name} />
                <Typography gutterBottom variant='h5'>{user.name}</Typography>
                <Box my={2} className={classes.icon}>
                  <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon />
                </Box>
                <Typography>{user.quote}</Typography>
              </Box>
            </Container>
          </SwiperSlide>)}
        </Swiper>
      </Container>
    </Box>
  )
}

export default Review
