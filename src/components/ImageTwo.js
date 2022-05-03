import { Parallax } from 'react-scroll-parallax';

const ImageTwo = () => {
  return (
    <Parallax className="river" translateY={['-200px', '200px']}>
      <div className='content'>
        <span className='description'>River</span>
      </div>
    </Parallax>
  );
};

export default ImageTwo;
