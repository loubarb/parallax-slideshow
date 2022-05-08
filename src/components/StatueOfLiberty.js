import { Parallax } from 'react-scroll-parallax';

const StatueOfLiberty = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[-25, 25]} opacity={[0.20, 1.25]} shouldAlwaysCompleteAnimation={true} className='statue'>
      <Parallax speed={-10} scale={[0.75, 1.12]} className='content'>
        <h2>1. Statue of Liberty</h2>
        <p>📍New York, NY, USA</p>
      </Parallax>
    </Parallax>
  );
};

export default StatueOfLiberty;
