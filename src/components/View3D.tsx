import React from 'react';

const View3D = () => {

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
          <div id="container2" style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
            <br />Loading...<br /><br />
          </div>
          <div id="container3" style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
            <br />Loading...<br /><br />
          </div>
        </div>
      </div>
    </div>
  )
};

export default View3D;
