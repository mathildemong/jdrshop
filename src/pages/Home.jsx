import React from 'react'
import {Link} from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from '../context/auth-context';
import BannerImage from '../assets/fond.jpg';
import '../styles/Home.css';
import Logo from "../assets/logo.png";

function Home() {
  // const { currentUser } = useContext(AuthContext);

  return (
  
<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
<div className="headerContainer">
<div>  <Link to="/"><img src={Logo} alt="logo"/></Link></div>
{/* <main className='main_home'>Welcome {currentUser.firstname} {currentUser.lastname} !</main> */}
        <p>Bienvenue dans notre univers</p>
        <Link to='/shop'>
        <button>Boutique</button>
        </Link>
        </div>
        </div>
  )
}

export default Home;