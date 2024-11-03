import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import IntroPage from '../Components/IntroPage';
import HeroImgHOME from '../Components/HeroImgHOME';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgHOME/>
      <IntroPage/>
      <Footer/>
    </div>
  )
}

export default Home
