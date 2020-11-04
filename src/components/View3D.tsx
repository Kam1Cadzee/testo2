import React, {useEffect} from 'react';

const View3D = () => {

  useEffect(() => {
    const staticPath = process.env.PUBLIC_URL + '/js/';

    let swipe = document.createElement('script');
    swipe.src = staticPath + 'view.js';
    swipe.id = 'view-js';
    document.body.appendChild(swipe);

    return () => {
      swipe.remove();
    };
  }, []);

  return (
    <div className="view3D">
      <div className="container position-relative">
        <span className="icon-3D">&nbsp;</span>
        <div id="sync2" className="owl-carousel owl-theme slider-3D-title">
          <div className="item">
            L'espace de co-working
          </div>
          <div className="item">
            L'espace médical et bien-être
          </div>
          <div className="item">
            La résidence seniors
          </div>
        </div>
        <div className="owl-carousel owl-theme slider-3D" id="sync1">
          <div id="container1" style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
            <br />Loading...<br /><br />
          </div>
          {/*<div id="container2" style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
            <br />Loading...<br /><br />
          </div>
          <div id="container3" style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
            <br />Loading...<br /><br />
          </div>*/}
        </div>
      </div>
    </div>
  )
};

export default View3D;
