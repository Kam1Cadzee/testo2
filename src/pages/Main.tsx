import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import slide1 from '../assets/img/slide1.jpg';
import advantage1 from '../assets/img/advantage1.jpg';
import advantage2 from '../assets/img/advantage2.jpg';
import advantage3 from '../assets/img/advantage3.jpg';
import gregoire from '../assets/img/gregoire-marra.png';
import gaetan from '../assets/img/gaetan-bellec.png';
import chiste from '../assets/img/chiste-fabiola.png';
import map from '../assets/img/map.png';
import logo from '../assets/img/logo-ci_w.svg';
import icArrowGreen from '../assets/img/icons/ic-arrow-green.svg';
import icArrowYellow from '../assets/img/icons/ic-arrow-yellow.svg';
import icArrowBrown from '../assets/img/icons/ic-arrow-brown.svg';
import icCar from '../assets/img/icons/ic-car.svg';
import icBike from '../assets/img/icons/ic-bike.svg';
import icTrain from '../assets/img/icons/ic-train.svg';
import icBus from '../assets/img/icons/ic-bus.svg';
import icPlane from '../assets/img/icons/ic-plane.svg';
import View3D from '../components/View3D';
import {Switch} from 'react-router';
import Footer from '../components/Footer';
import AboutItem from '../components/AboutItem';

const data = [
  {
    id: 0,
    img: gregoire,
    email: 'marra@comptoir-immo.ch',
    phone: '+41 22 319 88 17',
    name: 'Grégoire Marra',
    position: 'Courtier - Bureaux'
  },
  {
    id: 1,
    img: gaetan,
    email: 'gbellec@comptoir-immo.ch',
    phone: '+41 22 319 89 22',
    name: 'Gaëtan Bellec',
    position: 'Courtier Junior - Arcades'
  },
  {
    id: 2,
    img: chiste,
    email: 'christe@comptoir-immo.ch',
    phone: '+41 22 319 89 24',
    name: 'Fabiola Christe',
    position: 'Gérante - Arcades'
  },
]
const Main = () => {

  useEffect(() => {
    const staticPath = process.env.PUBLIC_URL + '/js/';

    let swipe = document.createElement('script');
    swipe.src = staticPath + 'scripts.js';
    swipe.id = 'swipe-js';
    document.body.appendChild(swipe);

    return () => {
      swipe.remove();
    };
  }, []);

  return (
    <div>
      <div className="welcome">
        <Header isScroll={false}/>
        <div className="welcome-center">
          <h1>
            <span className="h1-top">Surfaces mixtes à louer</span>
            <span className="h1-main">L’Ecosystème</span>
            <span className="h1-bottom">de vos projets</span>
          </h1>
          <p>Accélérez votre développement en offrant un cadre unique à votre activité.</p>
        </div>

        <footer className="welcome-bottom">
          <div className="welcome-bottom_main">
            <div>
              <span className="number">7’400 m<sub>²</sub></span> de surfaces à louer
            </div>
          </div>
          <div className="welcome-bottom_item">
            <div>
              <span className="number">6’400 m<sub>²</sub></span> de surfaces d'activité
            </div>
          </div>
          <div className="welcome-bottom_item">
            <div>
              <span className="number">1’000 m<sub>²</sub></span> de surfaces commerciales
            </div>
          </div>
        </footer>
      </div>
      <div className="advantage">
        <div className="container">
          <article className="advantage-one left">
            <figure className="pic"><img src={advantage1} /></figure>
            <div className="advantage-content">
              <p className="subtitle">UN CADRE UNIQUE</p>
              <div className="text">
                Objet exclusif sur la Rive Gauche, cette réalisation d’un bureau d’architectes de renommée nationale,
                Bassi Carella Marello, conjugue une conception contemporaine avec une construction de très haute qualité
                répondant aux dernières normes techniques et environnementales.
                <p><Link to={'/surfaces'} className="btn">Voir les surfaces commerciales</Link></p>
              </div>
            </div>
          </article>
          <article className="advantage-one">
            <figure className="pic"><img src={advantage2} /></figure>
            <div className="advantage-content">
              <p className="subtitle">PARFAITEMENT INTÉGRÉ</p>
              <div className="text">
                A moins de 5 km du centre-ville et fortement connecté aux réseaux de transports genevois (TPG, Léman Express, Voie Verte), O<sub>2</sub> est implanté au cœur d’un nouveau quartier composé de logements, commerces et services de proximité au sein d’espaces publics variés et de qualité.
                <p><Link to={'/surfaces'} className="btn btn-light">Voir les surfaces commerciales</Link></p>
              </div>
            </div>
          </article>
          <article className="advantage-one left">
            <figure className="pic"><img src={advantage3} /></figure>
            <div className="advantage-content">
              <p className="subtitle">POUR DÉVELOPPER VOS PROJETS</p>
              <div className="text">
                Un lieu idéal pour développer votre activité dans le domaine de la santé et du bien-être, des résidences
                avec services, des espaces de coworking ou encore des professions attachées à la notion de durabilité.
                <p><Link to={'/surfaces'} className="btn btn-light">Voir les surfaces commerciales</Link></p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div id="slider">
        <View3D />
      </div>
      <div className="about-us">
        <div className="about-us_container">
          <div className="about-us_top">
            <span className="about-us_logo"><img src={logo} /></span>
            <h2>L'équipe commerciale</h2>
          </div>
          <div className="owl-carousel owl-theme aboutus-slider">
            {
              data.map(d => {
                return <AboutItem {...d}/>
              })
            }
          </div>
        </div>
      </div>
      <div className="map">
        <div className="container">
          <h2>Accessibilité</h2>
          <div className="map-scroll">
            <figure className="map-figure">
              <img src={map} className="map-pic" />
                <figcaption className="map-caption">
                  <span className="icon-swipe" style={{left: '2rem'}}>&nbsp;</span>
                  <div className="map-caption_block">
                    <span className="map-caption_arrow arrow-green"><img src={icArrowGreen} /></span>
                    <span>Voie verte</span>
                  </div>
                  <div className="map-caption_block">
                    <span className="map-caption_arrow arrow-yellow"><img src={icArrowYellow} /></span>
                    <span>Transports publics</span>
                  </div>
                  <div className="map-caption_block">
                    <span className="map-caption_arrow arrow-brown"><img src={icArrowBrown} /></span>
                    <span>Principaux axes routiers</span>
                  </div>
                  <div className="map-caption_cols">
                    <div className="col-4">
                      <p className="title">
                        <img src={icBike}/>
                          <span>15 min</span>
                      </p>
                      du centre de Genève à vélo
                    </div>
                    <div className="col-4">
                      <p className="title">
                        <img src={icTrain}/>
                          <span>15 min</span>
                      </p>
                      de la Gare Cornavin en train
                    </div>
                    <div className="col-4">
                      <p className="title">
                        <img src={icBus}/>
                          <span>17 min</span>
                      </p>
                      du centre-ville en bus
                    </div>
                    <div className="col-4">
                      <p className="title">
                        <img src={icPlane}/>
                          <span>30 min</span>
                      </p>
                      de l'aéroport de Genève Cointrin en train
                    </div>
                  </div>
                  <a target={'_blank'} href="https://www.google.com/maps/place/Communaux+d'Ambilly/@46.2048479,6.2131923,1551m/data=!3m1!1e3!4m5!3m4!1s0x478c6fc350bef5cd:0xc5bbd41489f1fe83!8m2!3d46.2040688!4d6.2131342" className="btn btn-black map-link">Voir sur Google Maps</a>
                </figcaption>
            </figure>
          </div>
          <p className="map-link-row"><a target={'_blank'} href="https://www.google.com/maps/place/Communaux+d'Ambilly/@46.2048479,6.2131923,1551m/data=!3m1!1e3!4m5!3m4!1s0x478c6fc350bef5cd:0xc5bbd41489f1fe83!8m2!3d46.2040688!4d6.2131342" className="btn btn-black map-link">Voir sur Google Maps</a></p>
          <div className="map-caption_cols map-caption_cols-duplicate">
            <div className="col-4">
              <p className="title">
                <img src={icBike}/>
                  <span>15 min</span>
              </p>
              du centre de Genève à vélo
            </div>
            <div className="col-4">
              <p className="title">
                <img src={icTrain}/>
                  <span>15 min</span>
              </p>
              de la Gare Cornavin en train
            </div>
            <div className="col-4">
              <p className="title">
                <img src={icBus}/>
                  <span>17 min</span>
              </p>
              du centre-ville en bus
            </div>
            <div className="col-4">
              <p className="title">
                <img src={icPlane}/>
                  <span>30 min</span>
              </p>
              de l'aéroport de Genève Cointrin en train
            </div>
          </div>
          <article className="map-content">
            <div className="map-content_col">
              <p className="map-content_title">
                <img src={icCar} />
              </p>
              À proximité immédiate de l’autoroute et de
              la gare Léman Express de Chêne-Bourg
            </div>
            <div className="map-content_col">
              <p className="map-content_title">
                <img src={icBike} />
              </p>
              À 5 minutes de
              la Voie Verte (Accès sécurisé reliant Chêne-Bourg à Genève en 15 minutes, réservé aux vélos et aux
              piétons)
            </div>
            <div className="map-content_col">
              <p className="map-content_title">
                <img src={icTrain} />
              </p>
              À 15 minutes de
              la gare Cornavin (depuis la gare Léman Express de Chêne-Bourg)
            </div>
            <div className="map-content_col">
              <p className="map-content_title">
                <img src={icBus} />
              </p>
              À 17 minutes du centre-ville en bus (Quartier desservi par 3 lignes de bus)
            </div>
            <div className="map-content_col">
              <p className="map-content_title">
                <img src={icPlane} />
              </p>
              À 30 minutes en train de l'aéroport de Genève Cointrin (depuis la gare Léman Express de Chêne-Bourg)
            </div>
          </article>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Main;
