import React from "react";
import './header.css';


 function Header() {
    return(
<div className="header">
<a href="#default" className="logo">Finsweet</a>
  <div className="header-right">
    <a className="active" href="#Home">Home</a>
    <a href="#contact">Blog</a>
    <a href="#about">About Us</a>
    <a href="#about">Contact Us</a>
    <button>Subscribe</button>
  </div>
</div>
    );
};
export default Header;
