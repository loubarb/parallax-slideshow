import { ParallaxBanner } from "react-scroll-parallax";

const Banner = () => {
  const starrySky = {
    image: 'https://i.ibb.co/WFqmDv1/starry-sky.jpg',
    translateY: [0, 30],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="headline">
        <h1>Hello &amp; Welcome!</h1>
      </div>
    )
  };

  const grassyField = {
    image: 'https://i.ibb.co/0KDmSJS/grassy-field-nosky.png',
    translateY: [0, 5],
    scale: [1, 1.12, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const gradientOverlay = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: <div className="gradient" />
  };

  return (
    <ParallaxBanner 
      layers={[starrySky, grassyField, gradientOverlay]} 
      className="fullBanner"
    />
  )
}

export default Banner;