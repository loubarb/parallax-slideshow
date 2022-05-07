import { Parallax } from 'react-scroll-parallax';

const GoldenGate = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[-25, 25]} opacity={[0.20, 1]} shouldAlwaysCompleteAnimation={true} className='goldenGate'>
      <Parallax speed={-10} scale={[0.75, 1.12]} className='content'>
        <h2>10. Golden Gate Bridge</h2>
        <p>📍San Francisco, CA</p>
      </Parallax>
    </Parallax>
  );
};

export default GoldenGate;
