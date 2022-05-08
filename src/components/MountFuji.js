import { Parallax } from 'react-scroll-parallax';

const MountFuji = () => {
  return (
    <Parallax scale={[1, 1.12, "easeOutCubic"]} translateY={[-30, 25]} opacity={[0.20, 1.5]} shouldAlwaysCompleteAnimation={true} className='mountFuji'>
      <Parallax speed={-10} scale={[0.75, 1.12]} className='content'>
        <div className='location'>
          <h2>9. Mount Fuji</h2>
          <p>📍Honshu Island, Japan</p>
        </div>
      </Parallax>
    </Parallax>
  );
};

export default MountFuji;
