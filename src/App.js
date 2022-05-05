import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner from './components/Banner';
import Headline from './components/Headline';
import World from './components/World';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Banner />
        <div className='intro'>
          <Headline />
        </div>
        <div className='globe'>
          <World />
        </div>
      </ParallaxProvider>
    </div>
  );
}

export default App;
