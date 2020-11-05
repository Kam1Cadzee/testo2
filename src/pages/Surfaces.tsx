import React, {useEffect, useMemo, useState} from 'react';
// @ts-ignore
import ImageMapper from 'react-image-mapper';
import Header from '../components/Header';
import slide1 from '../assets/img/slide1.jpg';
import URL from '../assets/img/bg-surface.jpg';
import useWindowSize from '@rooks/use-window-size';
import FloorModal from '../components/FloorModal';
import ContactModal from '../components/ContactModal';
import planFloor from '../assets/img/floors/plan-floor-0.png';
import vueCorch from '../assets/img/floors/vue-corch.png';
import planFloor1 from '../assets/img/floors/plan-floor-1.png';
import planFloor2 from '../assets/img/floors/plan-floor-2.png';
import planFloor3 from '../assets/img/floors/plan-floor-3.png';
import planFloor4 from '../assets/img/floors/plan-floor-4.png';
import planFloor5 from '../assets/img/floors/plan-floor-5.png';
import planFloor6 from '../assets/img/floors/plan-floor-6.png';
import planFloor11 from '../assets/img/floors/floor11.jpg';
import planFloor00 from '../assets/img/floors/floor00.jpg';
import planFloor12 from '../assets/img/floors/floor12.jpg';
import planFloor13 from '../assets/img/floors/floor13.jpg';
import planFloor14 from '../assets/img/floors/floor14.jpg';
import planFloor15 from '../assets/img/floors/floor15.jpg';
import planFloor16 from '../assets/img/floors/floor16.jpg';
import {Link, useLocation} from 'react-router-dom';

const fillColor = "rgba(0, 87, 74, 0.5)";
const coords = [
  [0,934,1288,847,1899,929,1900,1118,1294,1141,0,1094],
  [0,933,1290,849,1652,887,1652,817,691,866,286,847,2,870],
  [0,868,280,843,695,863,1652,805,1652,668,691,777,284,733,0,765],
  [0,760,280,727,689,769,1651,662,1652,536,691,681,279,616,-2,668],
  [0,670,279,613,691,677,1656,531,1656,519,1862,489,1652,408,695,584,282,506,0,576],
  [0,572,282,502,693,580,1652,405,1866,487,1941,475,1941,433,1652,284,693,490,282,399,0,481],
  [693,485,1652,279,1941,426,1941,330,1652,151,691,391]
];
const data = [
  {
    id: 0,
    title: 'Rez-de-chaussée',
    surface: 950.45,
    min: 300,
    images: [planFloor00]
  },
  {
    id: 1,
    title: '1 er étage',
    surface: '1’151.40',
    min: 300,
    images: [planFloor1, planFloor11]
  },
  {
    id: 2,
    title: '2 ème étage',
    surface: '1’151.40',
    min: 300,
    images: [planFloor2, planFloor12]
  },
  {
    id: 3,
    title: '3 ème étage',
    surface: '1’151.40',
    min: 300,
    images: [planFloor3, planFloor13]
  },
  {
    id: 4,
    title: '4 ème étage',
    surface: '1’156.70',
    min: 300,
    images: [planFloor4, planFloor14]
  },
  {
    id: 5,
    title: '5 ème étage',
    surface: '1’156.70',
    min: 300,
    images: [planFloor5, planFloor15]
  },
  {
    id: 6,
    title: '6 ème étage',
    surface: 546.55,
    min: 300,
    images: [planFloor16]
  },
];
const imgRatio = 2160 / 1353;

const Surfaces = () => {
  const location = useLocation();
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  const [index, setIndex] = useState(1);
  const [show, setShow] = useState(false);
  const [isContactShow, setIsContactShow] = useState(false);

  useEffect(() => {
    const staticPath = process.env.PUBLIC_URL + '/js/';

    let swipe = document.createElement('script');
    swipe.src = staticPath + 'scripts.js';
    swipe.id = 'swipe-js';
    document.body.appendChild(swipe);
    document.body.style.overflow = 'hidden';
    return () => {
      swipe.remove();
      document.body.style.overflow = 'scroll';
    };
  }, []);

  const MAP = useMemo(() => {
    const res = {
      name: "my-map",
      areas: coords.map((c, i) => {
        return { name: (i + 1) + '', shape: "poly", coords: c, fillColor: index !== i ? fillColor : 'transparent', preFillColor: index === i ? fillColor : null  }
      })
    }

    res.areas = res.areas.map(a => {
      a.coords = a.coords.map((c, i) => {
        if((i + 1) % 2 !== 0) {
          const width = innerWidth || document.documentElement.clientWidth;
          return c * width / 2160;
        }
        const height = innerHeight || document.documentElement.clientHeight;
        return c * height / 1353;
      });
      return a;
    })
    return res;
  }, [index, innerWidth, innerHeight]);

  const handleIncrease = () => {
    if(index < coords.length - 1) {
      setIndex(i => i + 1)
    }
  };

  const handleDecrease = () => {
    if(index >= 1) {
      setIndex(i => i - 1)
    }
  };

  const handleClick = (i: number) => {
    setIndex(--i)
  };

  if(innerWidth === null) return null;
  const detail = data.find(d => d.id === index)!;
  return (
    <div className="welcome surfaces">
      <Header isScroll={false} />

      <div className={'wrapper-img'}>
        <ImageMapper active={true} src={URL} map={MAP} width={innerWidth} height={innerHeight! - ((index + 1) / 10)} onClick={(evt: any) => handleClick(+evt.name)}/>
      </div>
      <Link to="/view3d" target={'_blank'}>
      <figure className="pic-view3D">
          <img src={slide1} />
          <span className="icon-3D dark">&nbsp;</span>
      </figure>

      </Link>
      <footer className="surfaces-bottom">
        <div className="surfaces-bottom_main">
          <div className="surfaces-bottom_info">
            <p>{index}</p>
            {detail.title}
          </div>
          <button type="button" className="btn-plans" onClick={() => setShow(true)}>Voir les plans</button>
        </div>
        <div className="surfaces-paging">
          <button type="button" className="surfaces-paging_up" onClick={handleIncrease}></button>
          <button type="button" className="surfaces-paging_down" onClick={handleDecrease}></button>
        </div>
      </footer>
      <FloorModal show={show} onClose={() => setShow(false)} index={index} setIndex={setIndex} openContact={() => setIsContactShow(true)}/>
      <ContactModal onClose={() => setIsContactShow(false)} show={isContactShow}/>
    </div>
  )
};

export {data};
export default Surfaces;
