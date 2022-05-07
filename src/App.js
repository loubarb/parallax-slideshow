import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner from './components/Banner';
import Headline from './components/Headline';
import World from './components/World';
import TopTen from './components/Top10';
import GoldenGate from './components/GoldenGate';
import BigBen from './components/BigBen';
import TajMahal from './components/TajMahal';

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
        <div className='intro'>
          <TopTen />
        </div>
        <div className='divider'>
        </div>
        <div className='noOverflow'>
          <GoldenGate />
        </div>
        <div className='divider'>
        </div>
        <div className='noOverflow'>
          <BigBen />
        </div>
        <div className='divider'>
        </div>
        <div className='noOverflow'>
          <TajMahal />
        </div>
        <div className='divider'>
        </div>
        
      </ParallaxProvider>
    </div>
  );
}

export default App;
