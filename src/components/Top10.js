import { Parallax } from 'react-scroll-parallax';

const TopTen = () => {
  return (
    <Parallax scale={[0.75, 1.12]}>
      <div className='topTenText'>
        <h1>Here are 10 of the Most Popular Landmarks in the World</h1>
      </div>
    </Parallax>
  );
};

export default TopTen;
