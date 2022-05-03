import { Parallax } from 'react-scroll-parallax';

const ImageOne = () => {
  return (
    <Parallax className="rocks">
      <div className='content'>
      <Parallax scale={[1, 2]} rotateZ={['0deg', '360deg']}>
        <h3>Hello World!</h3>
      </Parallax>
      </div>
    </Parallax>
  );
};

export default ImageOne;
