import { Parallax } from 'react-scroll-parallax';

const BigBen = () => {
  return (
    <Parallax scale={[1.12, 1.22, "easeOutCubic"]} speed={-10} opacity={[0.20, 1]} shouldAlwaysCompleteAnimation={true} className='bigBen'>
      <Parallax speed={10} scale={[0.75, 1.12]} className='content'>
        <h2>9. Big Ben</h2>
        <p>📍London, UK</p>
      </Parallax>
    </Parallax>
  );
};

export default BigBen;
