import { ParallaxBanner } from "react-scroll-parallax";

const ThanksBanner = () => {
  const starrySky = {
    image: 'https://i.ibb.co/WFqmDv1/starry-sky.jpg',
    translateY: [0, 30],
    opacity: [0.3, 1],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const thanks = {
    opacity: [0, 1, "easeOutCubic"],
    translateY: [0, 30],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="headline">
        <h1>Thanks for stopping by!</h1>
      </div>
    )
  }

  return (
    <ParallaxBanner 
      layers={[starrySky, thanks]} 
      className="fullBanner"
    />
  )
};

export default ThanksBanner;