import { Parallax } from 'react-scroll-parallax';

const World = () => {
  return (
    <Parallax translateY={[0, -25]} rotateZ={['0deg', '540deg']} shouldAlwaysCompleteAnimation={true}>
      <h1 className="headlineText">Around the world</h1>
    </Parallax>
  );
};

export default World;
