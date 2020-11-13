import React, {useEffect} from 'react';
import slide1 from '../assets/img/slide1.jpg';
import slide2 from '../assets/img/slide2.jpg';
import slide3 from '../assets/img/slide3.jpg';
import {Link} from 'react-router-dom';

interface IView3DProps {
  isBorder?: boolean;
}
const View3D = ({isBorder = true}:IView3DProps) => {
  return (
    <div className={`view3D ${!isBorder ? 'withoutBorder' : ''}`}>
      <div className="container position-relative">
        <h2>Découvrez à quoi pourrait ressembler vos surfaces d’activité.</h2>
        <div className="slider-3D">
          <div className="col-3">
           <Link target={"_blank"} to={{
             pathname: '/view3d/1'
           }}>
             <figure className="slide">
               <img src={slide1} />
               <span className="icon-3D">&nbsp;</span>
             </figure>
           </Link>
            <p>L'espace de co-working</p>
          </div>
          <div className="col-3">
            <Link target={"_blank"} to={{
              pathname: '/view3d/2'
            }}>
            <figure className="slide">
              <img  src={slide2} />
                <span className="icon-3D">&nbsp;</span>
            </figure>
            </Link>
            <p>L'espace médical et bien-être</p>
          </div>
          <div className="col-3">
            <Link target={"_blank"} to={{
              pathname: '/view3d/3'
            }}>
            <figure className="slide">
              <img  src={slide3} />
                <span className="icon-3D">&nbsp;</span>
            </figure>
            </Link>
            <p>La résidence seniors</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default View3D;
