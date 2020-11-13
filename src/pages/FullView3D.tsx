import React, {useEffect} from 'react';

const FullView3D = (props: any) => {
  console.log(props)
  let i = props.match.params.id ? +props.match.params.id : 1;
  if(i < 1) {
    i = 1;
  }
  else if(i > 3) {
    i = 1;
  }
  useEffect(() => {
    const staticPath = process.env.PUBLIC_URL + '/js/';

    let swipe = document.createElement('script');
    swipe.innerHTML = `
     var pano1 = new pano2vrPlayer("container");

  window.addEventListener("load", function () {
    pano1.readConfigUrlAsync(\`pano${i}.xml\`);
  });
    `
    document.body.appendChild(swipe);

    return () => {
      swipe.remove();
    };
  }, []);

  return (
    <div id={"container"} style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
      <br />Loading...<br /><br />
    </div>
  )
};

export default FullView3D;
