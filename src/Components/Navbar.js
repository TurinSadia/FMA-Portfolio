import "./NavbarStyle.css";
import React,{useState } from 'react';
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import IntroImg from "../assets/profile.jpg";
import {FaBars, FaTimes} from 'react-icons/fa'



const Navbar = () => {
 const  activeLink ="bg-blue-100 text-black"
 const normalLink =""
const [click, setClick] = useState (false);
const handleClick = () => setClick(!click);

const [color,setColor] =useState(false);
const changeColor=() => {
if(window.scrollY >=100){
   setColor(true);
}else{
  setColor(false);
}


};

window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="logo-heading">
      <img className="profile-img" src={IntroImg} alt="IntroImg" />
      <h1 className="heading-name">Fakir Mashuque Alamgir</h1>
      </Link>

<ul className={click ? "nav-menu active" : "nav-menu"}>
  <li><NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)} >Home</NavLink></li>
  <li><NavLink to="/Academic" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Academic</NavLink></li>
  <li><NavLink to="/ResearchProjects" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Research Projects</NavLink></li>
  <li><NavLink to="/Publication" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Publications</NavLink></li>
  <li><NavLink to="/Gallery" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Gallery</NavLink></li>
  <li><NavLink to="/Contact" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Contact</NavLink></li>
  {/* <li><Link to="/Search">Search</Link></li> */}
</ul>

<div className="hamburger-menu" onClick={handleClick}>
  {click ?(<FaTimes size={20} style={{color: "#fff"}
 
}/>) :(<FaBars size={20} style={{color: "#fff"}
 
}/>)}
  



</div>

    </div>
  )
}

export default Navbar
