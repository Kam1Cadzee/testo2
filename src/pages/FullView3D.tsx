import React, {useEffect} from 'react';
import View3D from '../components/View3D';

const FullView3D = () => {

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
    <View3D/>
  )
};

export default FullView3D;
