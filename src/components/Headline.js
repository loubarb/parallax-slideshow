import { Parallax } from 'react-scroll-parallax';

const Headline = () => {
  return (
    <Parallax translateX={[-30, 30]} translateY={[70, -70]}>
      <h1 className="headlineText">Let me take you on a tour...</h1>
    </Parallax>
  );
};

export default Headline;
