import { Parallax } from 'react-scroll-parallax';

const TopTen = () => {
  return (
    <Parallax scale={[0.75, 1.12]}>
      <h1 className="headlineText">Here's the Top 10 Most Popular Landmarks in the World</h1>
    </Parallax>
  );
};

export default TopTen;
