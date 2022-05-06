import { Parallax } from 'react-scroll-parallax';

const Test = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[0, 30]} opacity={[0, 1]} shouldAlwaysCompleteAnimation={true} className='goldenGate'>
      <Parallax speed={10} scale={[0.75, 1.12]} className='content'>
        <h2>Golden Gate</h2>
        <p>📍San Francisco, CA</p>
      </Parallax>
    </Parallax>
  );
};

export default Test;
