import React, {useEffect} from 'react';
import {data} from '../pages/Surfaces';

interface IFloorModalProps {
  show: boolean;
  onClose: any;
  index: number;
  setIndex: any;
  openContact: any;
}


const FloorModal = ({index, onClose, show, setIndex, openContact}: IFloorModalProps) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const staticPath = process.env.PUBLIC_URL + '/js/';

    let swipe = document.createElement('script');
    swipe.src = staticPath + 'floorSlider.js';
    swipe.id = 'floorSlider-js';
    document.body.appendChild(swipe);

    return () => {
      swipe.remove();
    };
  }, [show]);

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

  return (
<>
    <div className="iziModal-overlay" onClick={handleClose}></div>
    <div className="iziModal isAttached floor-modal">
      <div className="iziModal-wrap">
        <div className="iziModal-content">
      <div className="modal-body">
        <div className="modal-content">
          <button className="modal-close" onClick={handleClose}>&nbsp;</button>

          <h3>{detail.title}</h3>
          <ul className="floor-modal_info">
            <li>Surface <span className="bold">{detail.surface}</span> m<sup>2</sup></li>
            <li>Surface minimum <span className="bold">{detail.min}</span> m<sup>2</sup></li>
          </ul>
          <div className="owl-carousel owl-theme floor-slider">
            <figure className="plan-floor"><img src={detail.images[0]}/></figure>
            <figure className="vue"><img src={detail.images[1]}/></figure>
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

export default FloorModal;
