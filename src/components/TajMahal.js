import { Parallax } from 'react-scroll-parallax';

const TajMahal = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[-30, 25]} opacity={[0.20, 1.5]} shouldAlwaysCompleteAnimation={true} className='tajMahal'>
      <Parallax speed={-10} scale={[0.75, 1.12]} className='content'>
        <div className='location'>
          <h2>6. Taj Mahal</h2>
          <p>📍Agra, Uttar Pradesh, India</p>
        </div>
      </Parallax>
    </Parallax>
  );
};

export default TajMahal;
