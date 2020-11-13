import React, {useEffect, useState} from 'react';
import {data} from '../pages/Surfaces';
import useMedia from 'use-media';

import Carousel from 'react-multi-carousel';
import {Link} from 'react-router-dom';
import slide1 from '../assets/img/slide1.jpg';
const MobileDetect = require('mobile-detect');

interface IFloorModalProps {
  show: boolean;
  onClose: any;
  index: number;
  setIndex: any;
  openContact: any;
}

const titles = ['Plateau complet', 'Division en 2', 'Division en 3', 'Division en 4', 'Division en 5'];

const FloorModal = ({index, onClose, show, setIndex, openContact}: IFloorModalProps) => {
  const is767 = useMedia({maxWidth: '767px'});
  const [zoomIndex, setZoomIndex] = useState(-1);
  const [ind, setInd] = useState(0);

  const handleClose = () => {
    setZoomIndex(-1)
    onClose();
  };

  useEffect(() => {
    if(index === 0 || index === 6) {
      setInd(0);
    }
  }, [index]);

  if(!show) return null;

  const next = index === data.length - 1 ? 0 : index + 1;
  const prev = index === 0 ? data.length - 1: index - 1;

  const increase = () => {
    setIndex(next);
  };

  const decrease = () => {
    setIndex(prev);
  };

  const handleOpenContact = (e: any) => {
    e.preventDefault();
    onClose();
    openContact();
  };



  const detail = data.find(d => d.id === index)!;
  const md = new MobileDetect(window.navigator.userAgent);

  return (
<>

  {
    zoomIndex !== -1 && (
      <div  className={'zoomimg'} ><img src={detail.images[zoomIndex]}onClick={() => setZoomIndex(-1)} /></div>
    )
  }
    <div className="iziModal-overlay" onClick={handleClose}></div>
    <div className="iziModal isAttached floor-modal">
      {
        !md.mobile() && (
          <Link to="/view3d" target={'_blank'} className={'floorLink'}>
            <figure className="pic-view3D">
              <img src={slide1} />
              <span className="icon-3D dark">&nbsp;</span>
            </figure>
          </Link>
        )
      }
      <div className="iziModal-wrap">
        <div className="iziModal-content">
      <div className="modal-body">

        <div className="modal-content">
          <button className="modal-close" onClick={handleClose}>&nbsp;</button>

          <h3>{detail.title}</h3>
         <div style={{position: 'relative'}}>
           {index !== 0 && index !== 6 && <p className={'titleFloor'}>{titles[ind]}</p>}
           <ul className="floor-modal_info">
             <li>Surface <span className="bold">{detail.surface}</span> m<sup>2</sup></li>
             <li>Surface minimum <span className="bold">{detail.min}</span> m<sup>2</sup></li>
           </ul>
         </div>
         <div style={{position: 'relative'}} className={'floor-slider'}>
           {index === 0 || index === 6 ? (
             <Carousel
               key={1}
               responsive={{
                 minimobile: {
                   breakpoint: { max: 3000, min: 0 },
                   items: 1,
                   slidesToSlide: 1
                 }
               }}
               itemClass="carousel-item-li"
               containerClass="floor-slider"
               focusOnSelect={false}
               transitionDuration={100}
               draggable={true}
               swipeable={true}
               arrows={false}
               showDots={false}
               renderDotsOutside
               dotListClass="owl-dots"
               deviceType="desktop"

             >
               {
                 detail.images.map((img, i) => {
                   return <figure className="plan-floor"><img src={img} onClick={() => setZoomIndex(i)}/></figure>
                 })
               }
             </Carousel>
           ) : (
             <Carousel
               key={2}
               responsive={{
                 minimobile: {
                   breakpoint: { max: 3000, min: 0 },
                   items: 1,
                   slidesToSlide: 1
                 }
               }}
               itemClass="carousel-item-li"
               focusOnSelect={false}
               transitionDuration={100}
               renderButtonGroupOutside
               draggable={false}
               swipeable={true}
               arrows={false}
               showDots={true}
               renderDotsOutside
               dotListClass="owl-dots"
               deviceType="desktop"
               afterChange={(previousSlide, state) => {
                 console.log(state)
                 setInd(state.currentSlide)
               }}
               customButtonGroup={<ButtonGroup/>}
               customDot={<CustomDot/>}
             >
               {
                 detail.images.map((img, i) => {
                   return <figure className="plan-floor"><img src={img} unselectable={'off'} onClick={() => setZoomIndex(i)}/></figure>
                 })
               }
             </Carousel>
           )}
         </div>
          <span className="icon-compass"></span>
          <a onClick={handleOpenContact} className="btn btn-contact" >Contact</a>
          <div className="floor-count">
            <span className="floor-number">{prev}</span>
            <button type="button" className="floor-count_up" onClick={decrease}></button>
            <div className="floor-count_floor">
              <p>{index}</p>
              {detail.title}
            </div>
            <button type="button" className="floor-count_down" onClick={increase}></button>
            <span className="floor-number">{next}</span>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </>
  )
};
export const CustomDot = ({onClick, ...rest}: any) => {
  const {
    active,
    carouselState: {
      deviceType
    }
  } = rest;

  return (
    <button
      className={active ? 'owl-dot active' : 'owl-dot'}
      onClick={onClick}
    />
  );
};

const ButtonGroup = ({next, previous, goToSlide, ...rest}: any) => {
  const {carouselState: {currentSlide, deviceType, slidesToShow, totalItems}} = rest;
  if (['tablet', 'mobile'].some(s => s === deviceType)) {
    return null;
  }
  return (
    <div className="owl-nav">
      <button className={currentSlide === 0 ? 'owl-prev disabled' : 'owl-prev'} onClick={previous}/>
      <button className={currentSlide + slidesToShow >= totalItems ? 'owl-next disabled' : 'owl-next'} onClick={next}/>
    </div>
  );
};

export default FloorModal;
