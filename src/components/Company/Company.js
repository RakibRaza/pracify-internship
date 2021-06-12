import { Container, Typography, makeStyles, Box } from '@material-ui/core'
import React from 'react'
import company1 from '../../asset/company-1.png'
import company2 from '../../asset/company-2.png'
import company3 from '../../asset/company-3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Autoplay, Pagination])

const useStyles = makeStyles(theme => ({
  root: {
    background: '#fbfefe',
    padding: theme.spacing(10, 0, 4)
  },
  slide: {
    '& img': {
      display: 'block', margin: 'auto'
    },
    '& .swiper-pagination-bullet': {
      padding: '6px'
    },
    '& .swiper-pagination-bullet-active': {
      background: theme.palette.primary.main,
    }
  }
}))

const Company = () => {
  const classes = useStyles()
  const company = [company1, company2, company3, company2, company1, company3, company1, company2]

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Proudly presented by
        </Typography>
        <Typography align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.
        </Typography>

        <Swiper className={classes.slide} slidesPerView={1} spaceBetween={10} pagination={{
          "clickable": true
        }} autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }} breakpoints={{
          "640": {
            "slidesPerView": 2,
            "spaceBetween": 20
          },
          "768": {
            "slidesPerView": 3,
            "spaceBetween": 40
          },
          "1024": {
            "slidesPerView": 5,
            "spaceBetween": 50
          }
        }}>
          {company.map((item, id) => <SwiperSlide key={id}>
            <Box style={{ height: '300px' }} display='flex' alignItems='center'>
              <img src={item} alt="company" />
            </Box>
          </SwiperSlide>)}
        </Swiper>
      </Container>
    </div>
  )
}

export default Company
