import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import TextBox from './components/TextBox';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <TextBox />
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </ParallaxProvider>
    </div>
  );
}

export default App;
