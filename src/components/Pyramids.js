import { Parallax } from 'react-scroll-parallax';

const Pyramids = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[-30, 25]} opacity={[0.20, 1.35]} shouldAlwaysCompleteAnimation={true} className='pyramids'>
      <Parallax speed={-10} scale={[0.75, 1.12]} className='content'>
        <h2>4. Pyramids of Giza</h2>
        <p>📍Giza, Egypt</p>
      </Parallax>
    </Parallax>
  );
};

export default Pyramids;
