import { Parallax } from 'react-scroll-parallax';
import Rocks from '../img/water-rocks.jpg';

const ImageOne = () => {
  return (
    <div>
      <Parallax
        style={{
          background: `url(${Rocks})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="rocks"
        translateY={[-20, 20]}
        speed={-100}
      ></Parallax>
    </div>
  );
};

export default ImageOne;
