import React, {useState} from 'react';
import logo from '../assets/img/logo_gr.svg';
import {Link, NavLink} from 'react-router-dom';
import Footer from './Footer';
import ContactModal from './ContactModal';

const Header = () => {
  const [isContactShow, setIsContactShow] = useState(false);


  const handleOpenContact = (e: any) => {
    e.preventDefault();
    setIsContactShow(true);
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo"><img src={logo} alt="O2 Belle Terre (logo)" /></Link>
      <div className="mobile-menu">
        <span className="close">&nbsp;</span>
        <nav className="header-menu">
          <ul>
            <li><NavLink to="/about">À Propos</NavLink></li>
            <li><NavLink to="/surfaces">Surfaces commerciales</NavLink></li>
            <li><NavLink to="/localisation" >Localisation</NavLink></li>
          </ul>
        </nav>
        <a href="javascript:void(0);" className="btn-brochure" data-izimodal-open="#downloadBrochure"
           data-izimodal-transitionin="fadeInDown">Téléchargez la brochure</a>
        <a className="btn" onClick={handleOpenContact}>Contact</a>
      </div>
      <span className="btn-mobile">
        <i></i>
        <i></i>
        <i></i>
    </span>
      <ContactModal onClose={() => setIsContactShow(false)} show={isContactShow}/>
    </header>
  )
};

export default Header;
