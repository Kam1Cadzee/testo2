import React, {useState} from 'react';
import logoGR from '../assets/img/logo_gr.svg';
import logo from '../assets/img/logo.svg';
import {Link, NavLink} from 'react-router-dom';
import Footer from './Footer';
import ContactModal from './ContactModal';
import useMedia from 'use-media';
import DownloadModal from './DownloadModal';
import {useScrollYPosition} from 'react-use-scroll-position';

interface IHeaderProps {
  isGreen?: boolean;
  isScroll?: boolean;
}
const Header = ({isGreen = false, isScroll = true}:IHeaderProps) => {
  const scrollY = useScrollYPosition();
  const [isContactShow, setIsContactShow] = useState(false);
  const [isDownloadShow, setIsDownloadShow] = useState(false);

  const [isShow, setShow] = useState(false);
  const is1140 = useMedia({maxWidth: '1140px'});


  const handleOpenContact = (e: any) => {
    e.preventDefault();
    setShow(false);
    setIsContactShow(true);
  };

  const handleOpenDownload = (e: any) => {
    e.preventDefault();
    setShow(false);
    setIsDownloadShow(true);
  };

  return (
    <>
      {
        isShow && is1140 && (
          <div className="mobile-menu">
            <span className="close" onClick={() => setShow(false)}>&nbsp;</span>
            <nav className="header-menu">
              <ul>
                <li><NavLink to="/about">À Propos</NavLink></li>
                <li><NavLink to="/surfaces">Surfaces commerciales</NavLink></li>
                <li><NavLink to="/localisation" >Localisation</NavLink></li>
              </ul>
            </nav>
            <a className="btn-brochure" onClick={handleOpenDownload}>Téléchargez la brochure</a>
            <a className="btn" onClick={handleOpenContact}>Contact</a>
          </div>
        )
      }
    <header className={`header ${scrollY > 50 || isScroll ? 'scroll' : ''}`}>
      <Link to="/" className="header-logo"><img src={isGreen || scrollY > 50 ? logoGR : logo} alt="O2 Belle Terre (logo)" /></Link>
      {
        (!is1140) && (
          <div className="mobile-menu">
            <span className="close" onClick={() => setShow(false)}>&nbsp;</span>
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
        )
      }
      <span className="btn-mobile" onClick={() => setShow(true)}>
        <i></i>
        <i></i>
        <i></i>
      </span>
    </header>
      <ContactModal onClose={() => setIsContactShow(false)} show={isContactShow}/>
      <DownloadModal show={isDownloadShow} onClose={() => setIsDownloadShow(false)}/>
      </>
  )
};

export default Header;
