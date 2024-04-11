import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from '../assets/fond.jpg';
import '../styles/Home.css';

function Home() {

  return (
  
<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
<div className="headerContainer">
        <h1>JDR SHOP</h1>
        <p>Bienvenue dans notre univers</p>
        <Link to='/shop'>
        <button>order now</button>
        </Link>
        </div>
        </div>
  )
}

export default Home;