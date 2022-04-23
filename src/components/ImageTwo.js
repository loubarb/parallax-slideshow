import { Parallax } from 'react-scroll-parallax';
import River from '../img/water-river.jpg';

const ImageTwo = () => {
  return (
    <Parallax
      style={{
        background: `url(${River})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className="river"
    ></Parallax>
  );
};

export default ImageTwo;
