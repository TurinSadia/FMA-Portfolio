import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PublicationInfo from '../Components/PublicationInfo';
import HeroImgPublication from '../Components/HeroImgPublication';
import Tabs from '../Components/tab';




const Publication = () => {
  return (
    <div>

      <Navbar/>
      <HeroImgPublication/>
      <PublicationInfo/>
      <Tabs/>
      <Footer/>
      
    </div>
  )
}

export default Publication
