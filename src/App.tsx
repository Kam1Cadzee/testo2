import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css';
import './App.css';
import Footer from './components/Footer';
import Main from './pages/Main';
import DownloadModal from './components/DownloadModal';
import ContactModal from './components/ContactModal';
import About from './pages/About';
import Localisation from './pages/Localisation';
import Surfaces from './pages/Surfaces';
import FullView3D from './pages/FullView3D';
// @ts-ignore
import ReactCursorPosition from 'react-cursor-position';

function App() {
  const [isDownloadShow, setIsDownloadShow] = useState(false);
  const location = useLocation();
  const handleOpenContact = (e: any) => {
    e.preventDefault();
    setIsDownloadShow(true);
  };

  useEffect(() => {
    if(!window) return;

    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }, [location.pathname]);

  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={Main} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/localisation'} component={Localisation} />
        <Route exact path={'/surfaces'} component={() => <ReactCursorPosition><Surfaces /></ReactCursorPosition>} />
        <Route exact path={'/view3d/:id?'} component={FullView3D} />
      </Switch>
      <DownloadModal onClose={() => setIsDownloadShow(false)} show={isDownloadShow}/>
      {!location.pathname.startsWith('/view3d') && <a onClick={handleOpenContact} className="brochure-label">Téléchargez la brochure</a>}
    </div>
  );
}

export default App;
