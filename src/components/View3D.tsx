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
          <iframe src="http://www.archigraphie.ch/content/portfolio/VR-MAIL/LCDA/CO_WORKING_FINAL/index.html" width="100%" height={document.documentElement.clientHeight}>
            Ваш браузер не поддерживает плавающие фреймы!
          </iframe>
          <iframe src="http://www.archigraphie.ch/content/portfolio/VR-MAIL/LCDA/MEDICAL_FINAL_03/index.html" width="100%" height={document.documentElement.clientHeight}>
            Ваш браузер не поддерживает плавающие фреймы!
          </iframe>
          <iframe src="http://www.archigraphie.ch/content/portfolio/VR-MAIL/LCDA/TEST_CAFETERIA/index.html" width="100%" height={document.documentElement.clientHeight}>
            Ваш браузер не поддерживает плавающие фреймы!
          </iframe>
        </div>
      </div>
    </div>
  )
};

export default View3D;
