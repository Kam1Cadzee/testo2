import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Main from './pages/Main';
import DownloadModal from './components/DownloadModal';
import ContactModal from './components/ContactModal';
import About from './pages/About';
import Localisation from './pages/Localisation';
import Surfaces from './pages/Surfaces';
import FullView3D from './pages/FullView3D';

function App() {
  const [isDownloadShow, setIsDownloadShow] = useState(false);

  const handleOpenContact = (e: any) => {
    e.preventDefault();
    setIsDownloadShow(true);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={Main} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/localisation'} component={Localisation} />
        <Route exact path={'/surfaces'} component={Surfaces} />
        <Route exact path={'/view3d'} component={FullView3D} />
      </Switch>
      <DownloadModal onClose={() => setIsDownloadShow(false)} show={isDownloadShow}/>
      <a onClick={handleOpenContact} className="brochure-label">Téléchargez la brochure</a>
    </div>
  );
}

export default App;
