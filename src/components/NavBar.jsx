import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import { ShoppingCart } from "phosphor-react";
import "../styles/NavBar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
       <div>  <Link to="/"><img src={Logo} alt="logo"/></Link></div>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Shop"> Shop </Link>
          <Link to="/about"> About </Link>
          <Link to="/login"> Login </Link>
          <Link to="/panier"> Panier <ShoppingCart size={20} /></Link>
         
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/Shop"> Shop </Link>
        <Link to="/login"> Login </Link>
        
        <Link to="/panier">Panier <ShoppingCart size={20} /></Link>
      
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;