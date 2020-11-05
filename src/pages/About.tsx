import React, {useEffect} from 'react';
import Header from '../components/Header';
import View3D from '../components/View3D';
import advantage2 from '../assets/img/advantage2.jpg';
import pic1 from '../assets/img/pic1.jpg';
import pic2 from '../assets/img/pic2.jpg';
import {Switch} from 'react-router';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

const About = () => {

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
      <Header isGreen/>
      <main className="main" style={{marginTop: '20rem'}}>
        <div className="container">
          <p className="main-h2">Vos futures surfaces se trouvent à moins de 5 kilomètres du centre-ville de Genève, à
            Belleterre, l’un des quartiers les plus innovants du Canton de Genève. Installez votre activité là où la
            ville se mêle à la nature.</p>
          <figure className="main-pic"><img src={advantage2} /></figure>
          <h1>O<sub>2</sub>, où vous attend votre futur professionnel</h1>
          <p className="main-subtitle">Vos futures surfaces O<sub>2</sub> ont été pensées par un bureau d’architecture à la
            renommée internationale. <span className="medium-bold">Bassi Carella Marello</span> ont conjugué innovations
            techniques et environnementales pour construire un projet idéal, prêt à accueillir le futur de votre
            activité professionnelle.</p>
          <article className="main-cols">
            <div className="main-cols_pic">
              <figure className="pic"><img src={pic1} /></figure>
              <p className="button"><Link to={'/surfaces'} className="btn">Voir les surfaces commerciales</Link></p>
            </div>
            <div className="main-cols_text">
              <ul>
                <li>Commerces, bureaux ou dépôts, espaces de coworking ou résidences avec services, dans le domaine de
                  la santé, du bien-être, de l’environnement ou des tech, <span className="medium-bold">O<sub>2</sub> est l’endroit idéal</span> pour
                  accueillir et développer votre activité.
                </li>
                <li>Pour assurer à vos clients et collaborateurs un confort optimal, le concept repose sur une
                  construction respectant les dernières normes et de très hautes performances énergétiques.
                </li>
                <li>Parce que c’est important de se sentir chez soi sur son lieu de travail, les espaces permettent
                  une grande <span className="medium-bold">flexibilité et de multiples</span> possibilités
                  d’aménagement. Selon votre activité et vos besoins faites le choix d’un open-space, d’espaces
                  cloisonnés ou mixtes.
                </li>
                <li>Les espaces peuvent être divisés pour correspondre en tout point à vos besoins, ceux de vos
                  partenaires et ceux de vos clients.
                </li>
                <li>Les surfaces sont livrées semi-aménagées, avec faux-planchers, faux-plafonds, air rafraîchi, blocs
                  sanitaires, pour vous permettre de les agencer à votre guise.
                </li>
                <li>Pour ceux qui veulent garder les pieds sur terre ou ceux qui veulent prendre de la hauteur, une
                  belle terrasse et un roof-top exclusif sont disponibles.
                </li>
                <li>Pour assurer le confort de vos clients et collaborateurs et garantir l’accessibilité de vos espaces,
                  un parking privatif pour autos, vélos ou motos et un parking visiteurs sont mis à votre disposition.
                </li>
                <li><span className="medium-bold">Avec O<sub>2</sub></span>, développez votre activité au cœur d’un
                  quartier qui respire l’innovation.
                </li>
              </ul>
            </div>
          </article>
          <article className="dark-block">
            <div className="dark-block_content">
              <h3>O<sub>2</sub>, des surfaces qui respirent l’innovation</h3>
              <p className="main-subtitle">Pour vous accueillir dans un environnement professionnel qui respire, vos
                futurs surfaces prennent place dans l’un des quartiers les plus innovants du <span
                  className="medium-bold">Canton de Genève</span>. Le projet a été pensé pour s’inscrire dans l’ère du
                temps, avec comme pivots le développement durable et la mixité.</p>
              <div className="main-cols">
                <div className="main-cols_pic">
                  <figure className="pic"><img src={pic2} /></figure>
                  <p className="button"><Link to={'/surfaces'} className="btn btn-light">Voir les surfaces commerciales</Link></p>
                </div>
                <div className="main-cols_text">
                  <ul>
                    <li>Pour assurer votre confort et celui de vos collaborateurs, les infrastructures sont entièrement
                      neuves.
                    </li>
                    <li>Les accès et transports sont à proximité pour faciliter vos déplacements.</li>
                    <li>Les parkings sont situés entièrement en sous-sol pour assurer votre tranquillité</li>
                    <li>Les commerces, restaurants, services de proximité et écoles prennent place au cœur de ce
                      quartier innovant et le font vivre au quotidien.
                    </li>
                    <li>Les généreux espaces verts apportent une véritable bouffée d’oxygène et contribuent à une
                      qualité de l’air optimale. Ils amènent la nature au cœur même du quartier.
                    </li>
                    <li>L’ensemble se distingue par son calme et l’absence de nuisances liées au bruit.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="main-bottom">
              Parce que le respect de l’environnement est au cœur du projet O<sub>2</sub>, le concept énergétique global utilise 90% d’énergie renouvelable.
            </div>
          </article>
        </div>
      </main>

      <View3D/>
      <Footer/>
    </div>
  )
};

export default About;
