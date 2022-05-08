import { Parallax } from 'react-scroll-parallax';

const EiffelTower = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[-25, 25]} opacity={[0.20, 1]} shouldAlwaysCompleteAnimation={true} className='eiffelTower'>
      <Parallax speed={-10} scale={[0.75, 1.12]} className='content'>
        <h2>5. Eiffel Tower</h2>
        <p>📍Paris, France</p>
      </Parallax>
    </Parallax>
  );
};

export default EiffelTower;
