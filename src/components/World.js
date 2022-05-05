import { Parallax } from 'react-scroll-parallax';

const World = () => {
  return (
    <Parallax scale={[1, 1.11]} rotateZ={['0deg', '360deg']} className='worldText'>
      <h1 className="headlineText">Around the world</h1>
    </Parallax>
  );
};

export default World;
