import { Parallax } from 'react-scroll-parallax';

const BigBen = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[-25, 25]} opacity={[0.20, 1.5]} shouldAlwaysCompleteAnimation={true} className='bigBen'>
      <Parallax speed={-10} scale={[0.75, 1.12]} className='content'>
        <h2>7. Big Ben</h2>
        <p>📍London, UK</p>
      </Parallax>
    </Parallax>
  );
};

export default BigBen;
