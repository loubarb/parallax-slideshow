import { Parallax } from 'react-scroll-parallax';

const OperaHouse = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[-30, 25]} opacity={[0.20, 1.5]} shouldAlwaysCompleteAnimation={true} className='operaHouse'>
      <Parallax speed={-10} scale={[0.75, 1.12]} className='content'>
        <div className='location'>
          <h2>8. Sydney Opera House</h2>
          <p>📍Sydney, Australia</p>
        </div>
      </Parallax>
    </Parallax>
  );
};

export default OperaHouse;
