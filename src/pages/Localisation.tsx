import React, {useEffect} from 'react';
import Header from '../components/Header';
import View3D from '../components/View3D';
import icArrowGreen from '../assets/img/icons/ic-arrow-green.svg';
import icArrowYellow from '../assets/img/icons/ic-arrow-yellow.svg';
import icArrowBrown from '../assets/img/icons/ic-arrow-brown.svg';
import icCar from '../assets/img/icons/ic-car.svg';
import icBike from '../assets/img/icons/ic-bike.svg';
import icTrain from '../assets/img/icons/ic-train.svg';
import icBus from '../assets/img/icons/ic-bus.svg';
import icPlane from '../assets/img/icons/ic-plane.svg';
import icMap2 from '../assets/img/icons/ic-map2.svg';
import icForest from '../assets/img/icons/ic-forest.svg';
import icShop from '../assets/img/icons/ic-shop.svg';
import map from '../assets/img/map.png';
import {Switch} from 'react-router';
import Footer from '../components/Footer';

const Localisation = () => {


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
      <Header/>
      <main className="main">
        <div className="container">
          <h1>O2, donnez une bouffée d’oxygène à votre environnement professionnel</h1>
          <p className="main-subtitle">Vos futurs bureaux vous attendent à O2, au cœur d’un quartier innovant qui jouit
            du dynamisme de la ville et du calme de la nature toute proche.</p>
          <div className="map-scroll">
            <figure className="map-figure">
              <img src={map} className="map-pic" />
                <span className="icon-swipe">&nbsp;</span>
                <figcaption className="map-caption">
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
                        <img src={icBike} />
                          <span>15 min</span>
                      </p>
                      du centre de Genève à vélo
                    </div>
                    <div className="col-4">
                      <p className="title">
                        <img src={icTrain} />
                          <span>15 min</span>
                      </p>
                      de la Gare Cornavin en train
                    </div>
                    <div className="col-4">
                      <p className="title">
                        <img src={icBus} />
                          <span>17 min</span>
                      </p>
                      du centre-ville en bus
                    </div>
                    <div className="col-4">
                      <p className="title">
                        <img src={icPlane} />
                          <span>30 min</span>
                      </p>
                      de l'aéroport de Genève Cointrin en train
                    </div>
                  </div>
                </figcaption>
            </figure>
          </div>
          <p className="map-link-row"><a href="#" className="btn btn-black map-link">Voir sur Google Maps</a></p>
          <div className="map-caption_cols map-caption_cols-duplicate">
            <div className="col-4">
              <p className="title">
                <img src={icBike} />
                  <span>15 min</span>
              </p>
              du centre de Genève à vélo
            </div>
            <div className="col-4">
              <p className="title">
                <img src={icTrain} />
                  <span>15 min</span>
              </p>
              de la Gare Cornavin en train
            </div>
            <div className="col-4">
              <p className="title">
                <img src={icBus} />
                  <span>17 min</span>
              </p>
              du centre-ville en bus
            </div>
            <div className="col-4">
              <p className="title">
                <img src={icPlane} />
                  <span>30 min</span>
              </p>
              de l'aéroport de Genève Cointrin en train
            </div>
          </div>
          <div className="route-one">
            <div className="route-one_icon">
              <img src={icMap2} className="icon-map2" />
            </div>
            <div className="route-one_text">
              Sa proximité avec le centre-ville de Genève lui confère une accessibilité optimale et la gare <span
              className="medium-bold">Léman Express de Chêne-Bourg</span> toute proche permet de rejoindre le centre
              dynamique de Genève en quelques minutes.
            </div>
          </div>
          <div className="route-one">
            <div className="route-one_icon">
              <img src={icForest} className="icon-forest" />
            </div>
            <div className="route-one_text">
              Dans ce nouveau quartier innovant à l’accessibilité optimale, les belles villas côtoient une vaste forêt
              de <span className="medium-bold">5 hectares et le Mont-Blanc</span> se pare de ses plus beaux atours pour
              offrir une vue unique à ceux qui y vivent et y travaillent.
            </div>
          </div>
          <div className="route-one">
            <div className="route-one_icon">
              <img src={icCar} className="icon-car" />
            </div>
            <div className="route-one_text">
              L’autoroute située à proximité des bureaux facilite les déplacements.
            </div>
          </div>
          <div className="route-one">
            <div className="route-one_icon">
              <img src={icPlane} className="icon-plane" />
            </div>
            <div className="route-one_text">
              La voie verte fait la part belle aux mobilités douces et l’aéroport tout proche permet d’organiser vos
              voyages internationaux en toute simplicité.
            </div>
          </div>
          <div className="route-one">
            <div className="route-one_icon">
              <img src={icShop} className="icon-shop" />
            </div>
            <div className="route-one_text">
              Les commerces et services de proximité entourent vos futurs bureaux pour vous offrir tout le confort et la
              simplicité dont vous avez besoin au quotidien.
            </div>
          </div>
        </div>
      </main>
      <View3D/>
      <Footer/>
    </div>
  )
};

export default Localisation;
