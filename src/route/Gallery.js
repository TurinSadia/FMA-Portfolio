import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import GalleryInfo from '../Components/GalleryInfo';
import HeroImgGALLERY from '../Components/HeroImgGALLERY';

const Gallery = () => {
  return (
    <div>
       <Navbar/>
       <HeroImgGALLERY/>
      <GalleryInfo/>
      <Footer/>
    </div>
  )
}

export default Gallery
