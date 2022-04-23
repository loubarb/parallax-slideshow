import { Parallax } from 'react-scroll-parallax';
import Sunset from '../img/sunset.jpg';

const ImageThree = () => {
  return (
    <Parallax
      style={{
        background: `url(${Sunset})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="sunset"
    ></Parallax>
  );
};

export default ImageThree;
