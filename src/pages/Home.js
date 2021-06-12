import React from 'react'
import Header from '../components/Header/Header'
import Services from '../components/Services/Services'
import Blog from '../components/Blog/Blog'
import Footer from '../components/Footer/Footer'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Review from '../components/Review/Review'
import Company from '../components/Company/Company'

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Company />
      <Review />
      <NewsLetter />
      <Blog />
      <Footer />
    </>
  )
}

export default Home
