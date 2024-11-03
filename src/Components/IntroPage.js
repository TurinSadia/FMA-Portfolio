import ".//IntroPageStyle.css";
import ColIntroImg from "../assets/col-picture.jpg";

import  LogoImg1 from "../assets/FACULTY.jpg";
import  LogoImg2 from "../assets/IEEE.jpg";
import  LogoImg3 from "../assets/google_scholar_logo.png";
import  LogoImg4 from "../assets/risjij.jpg";

import {Link} from "react-router-dom";
import React from 'react';

const IntroPage = () => {
  return (
    <div className="intro-page">
      <div className="intro-page-container">
        <div className="intro-main-content">
        <div className="left" >
        <img className="col-intro-img" src={ColIntroImg} alt="ColIntroImg" />
        </div>

        <div className="right" >
<p>
He was born in Dhaka, Bangladesh in 1983. He did his SSC from Saint Joseph High School, Dhaka, and HSC from Notre Dame College, Dhaka, in the years 1999 and 2001 respectively. He did his B.Sc. in Computer Science & Communication Engineering from the University of Greenwich, London, the UK in 2007. He received an M.Sc. degree in Wireless Communication from the University of Greenwich, London, the UK in 2008. His main areas of interest are machine learning, deep learning, robotics, and artificial intelligence. He has joined East-West University back in 2011. He is a Ph.D. student at the University of Dhaka, Bangladesh. He is currently working as an Assistant Professor at East-West University, Dhaka, Bangladesh.</p>




<div class="frame">
<Link to="/Contact">
<button class="custom-btn btn-7"><span>Contact Me ! </span></button>
</Link>
</div>



 </div>
</div>

</div>
      <div className="view_more_section">
  

<div className="slider">
<h3><u>  Connected With :</u> </h3>
<br /> <br /> <br />
  <div className="slide-track grid">

  <div className="slide">
       <a href="https://fse.ewubd.edu/electrical-electronic-engineering/faculty-view/fma" target="_blank"> <img  src={LogoImg1} alt="LogoImg1" /></a>
      </div>
    
      <div className="slide">
     <a href="https://clubs.ewubd.edu/ieeesb/leaders" target="_blank"><img  src={LogoImg2} alt="LogoImg2" /></a> 
      </div>

      <div className="slide">
     <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=sD1W1egAAAAJ" target="_blank"> <img  src={LogoImg3} alt="LogoImg3" /></a> 
      </div>

      <div className="slide">
      <img  src={LogoImg4} alt="LogoImg4" />
      </div>
    
   
  </div>
</div>










</div>
    </div>
  )
}

export default IntroPage
