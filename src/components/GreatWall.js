import { Parallax } from 'react-scroll-parallax';

const GreatWall = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[-25, 25]} opacity={[0.20, 1.5]} shouldAlwaysCompleteAnimation={true} className='greatWall'>
      <Parallax speed={-10} scale={[0.75, 1.12]} className='content'>
        <h2>3. Great Wall of China</h2>
        <p>📍Beijing, China</p>
      </Parallax>
    </Parallax>
  );
};

export default GreatWall;
