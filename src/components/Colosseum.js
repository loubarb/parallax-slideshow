import { Parallax } from 'react-scroll-parallax';

const Colosseum = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[-30, 25]} opacity={[0.20, 1.35]} shouldAlwaysCompleteAnimation={true} className='colosseum'>
      <Parallax speed={-10} scale={[0.75, 1.12]} className='content'>
        <h2>2. Colosseum</h2>
        <p>📍Rome, Italy</p>
      </Parallax>
    </Parallax>
  );
};

export default Colosseum;
