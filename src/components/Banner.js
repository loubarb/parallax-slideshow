import { ParallaxBanner } from "react-scroll-parallax";

const Banner = () => {
  return (
    <ParallaxBanner layers={[
      { image: 'https://i.ibb.co/WFqmDv1/starry-sky.jpg',
        translateY: [0, 30],
        // speed: -20,
        opacity: [1, 0.3],
        scale: [1.05, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
      },
      {
        image: 'https://i.ibb.co/0KDmSJS/grassy-field-nosky.png',
        translateY: [0, 15],
        // speed: -2,
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
      }
    ]}
    className='fullBanner'
    />
  )
}

export default Banner;