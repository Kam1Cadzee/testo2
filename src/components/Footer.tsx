import React from 'react';
import logo from '../assets/img/logo-batima.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>UN PROJET DÉVELOPPÉ PAR</p>
            <img src={logo} className="logo-batima" />
          </div>
          <div className="footer-right">
            <ul>
              <li>
                commercial@comptoir-immo.ch
                <p className="medium-bold">+41 22 319 88 17</p>
              </li>
              <li>
                <a href="https://comptoir-immo.ch" target="_blank">comptoir-immo.ch</a><br/>
                <a href="https://o2-belleterre.ch/" target="_blank">o2-belleterre.ch</a>
              </li>
            </ul>
          </div>
          <address className="about-us_address">
            <p className="bold">Comptoir Immobilier SA</p>
            Cours de Rive 7<br/>
            1204 Genève, Suisse Case Postale 3753
          </address>
        </div>

        <div className="footer-bottom">
          <p>Ce site internet et son contenu sont non contractuels. Seul l'acte notarié fait foi.</p>
          <p>o2-belleterre.ch développé par <a href="https://wild-dots.com">Wild Dots</a></p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
