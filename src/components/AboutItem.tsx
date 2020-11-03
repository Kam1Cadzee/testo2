import React, {useState} from 'react';

interface IAboutItemProps {
  img: any;
  email: string;
  phone: string;
  name: string;
  position: string;
}
const AboutItem = ({email, img, name, phone, position}: IAboutItemProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="about-us_one" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <figure className="pic">
        <img src={img} />
        <figcaption className="pic-info">
          <a className={`about-us_link ${hover ? 'rotate' : ''}`}>&nbsp;</a>
          <div className={`about-us_info ${hover ? 'show' : ''}`}>
            <a href={`mailto:${email}`}>{email}</a>
            <p className="medium-bold">{phone}</p>
          </div>
        </figcaption>
      </figure>
      <div className="about-us_name">
        <p className="bold">{name}</p>
        {position}
      </div>
    </div>
  )
};

export default AboutItem;
