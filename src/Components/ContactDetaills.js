import "../Components/ContactDetailsStyle.css";
import {FaResearchgate,FaLinkedin,FaFacebookSquare,FaWhatsappSquare } from "react-icons/fa";

import React from 'react';

const ContactDetaills = () => {
  return (
    <div className="contact-info">
  
<div className="contact-details">
  
    <h1> Mailing ADDRESS </h1>
    <br /> <br />
    <div className="contact-subdetails">
    <h3>Address</h3>
    <p>A/2, Jahurul Islam Avenue
Jahurul Islam City, Aftabnagar
Dhaka-1212, Bangladesh</p>
 <h3>Office</h3>
 <p> Ext: 169 || Room No#
 fma@ewubd.edu</p>
 </div>

</div>

<br /> <br />
<div className="contact-subheading">
    <h1>OVER THE WEB</h1>


<div class="wrapper">
<a href="https://www.researchgate.net/profile/Mr-Fakir-Mashuque-Alamgir" target="_blank"><div class="bg-ico" id="researchgate"><i class="fab fa-researchgate social  researchgate"><FaResearchgate/></i></div></a>
<a href="https://www.facebook.com/fmalamgir" target="_blank"><div class="bg-ico" id="facebook"><i class="fab fa-facebook social  facebook "><FaFacebookSquare/></i></div></a>
<a href="https://wa.me/01726362147" target="_blank"><div class="bg-ico" id="whatsapp"><i class="fab fa-whatsapp social  whatsapp "><FaWhatsappSquare/></i></div></a>
<a href="https://www.linkedin.com/in/fakir-mashuque-alamgir-b6804b196/" target="_blank"><div class="bg-ico" id="linkedin"><i class="fab fa-linkedin social  linkedin "><FaLinkedin/></i></div></a>
</div>



</div>



<div className="map">

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.406343527703!2d90.42331591404917!3d23.768540384580444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7892dcf0001%3A0x853ad729be4edc71!2sEast%20West%20University!5e0!3m2!1sen!2sbd!4v1675495450969!5m2!1sen!2sbd" 
   width="100%" 
   height="450" 
   style={{border:0}} 
   allowfullscreen="" 
   loading="lazy" 
   referrerpolicy="no-referrer-when-downgrade">  
  </iframe>
</div>



    </div>
  )
}

export default ContactDetaills
