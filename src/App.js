import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner from './components/Banner';
import Headline from './components/Headline';
import World from './components/World';
import TopTen from './components/Top10';
import GoldenGate from './components/GoldenGate';
import BigBen from './components/BigBen';
import TajMahal from './components/TajMahal';
import MountFuji from './components/MountFuji';
import OperaHouse from './components/OperaHouse';
import EiffelTower from './components/EiffelTower';
import Pyramids from './components/Pyramids';
import GreatWall from './components/GreatWall';
import Colosseum from './components/Colosseum';
import StatueOfLiberty from './components/StatueOfLiberty';

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
        <div className='topTen'>
          <TopTen />
        </div>
        <div className='noOverflow'>
          <GoldenGate />
        </div>
        <div className='noOverflow'>
          <MountFuji />
        </div>
        <div className='noOverflow'>
          <OperaHouse />
        </div>
        <div className='noOverflow'>
          <BigBen />
        </div>
        <div className='noOverflow'>
          <TajMahal />
        </div>
        <div className='noOverflow'>
          <EiffelTower />
        </div>
        <div className='noOverflow'>
          <Pyramids />
        </div>
        <div className='noOverflow'>
          <GreatWall />
        </div>
        <div className='noOverflow'>
          <Colosseum />
        </div>
        <div className='noOverflow'>
          <StatueOfLiberty />
        </div>
        <div className='divider'></div>
      </ParallaxProvider>
    </div>
  );
}

export default App;
