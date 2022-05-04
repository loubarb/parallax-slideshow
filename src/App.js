import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import TextBox from './components/TextBox';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Banner />
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </ParallaxProvider>
    </div>
  );
}

export default App;
