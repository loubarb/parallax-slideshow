import { Parallax } from 'react-scroll-parallax';

const TajMahal = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[0, 35]} opacity={[0.20, 1]} shouldAlwaysCompleteAnimation={true} className='tajMahal'>
      <Parallax speed={10} scale={[0.75, 1.12]} className='content'>
        <h2>8. Taj Mahal</h2>
        <p>📍Agra, Uttar Pradesh, India</p>
      </Parallax>
    </Parallax>
  );
};

export default TajMahal;
