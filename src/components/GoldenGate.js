import { Parallax } from 'react-scroll-parallax';

const GoldenGate = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[-25, 25]} opacity={[0.20, 1.5]} shouldAlwaysCompleteAnimation={true} className='goldenGate'>
      <Parallax speed={-10} scale={[0.75, 1.12]} className='content'>
        <div className='location'>
          <h2>10. Golden Gate Bridge</h2>
          <p>📍San Francisco, California, USA</p>
        </div>
      </Parallax>
    </Parallax>
  );
};

export default GoldenGate;
