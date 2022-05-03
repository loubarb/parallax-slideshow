import React from "react";
import { Parallax } from "react-scroll-parallax";

const TextBox = () => {
  return (
    <div className="content">
      <Parallax scale={[1, 2]} rotateZ={['0deg', '360deg']}>
        <h3>Hello World!</h3>
      </Parallax>
    </div>
  )
};

export default TextBox;