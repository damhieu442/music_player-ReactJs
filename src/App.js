import './App.css';
import Cd from './components/Cd';
import Control from './components/Control';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Progress from './components/Progress';

const app = {
  
}


function App() {
  return (
    <div className="player">
        <div className="dashboard">
          <Header />

          <Cd />

          <Control />
          
          <Progress />
        </div>
        <Playlist />
    </div>
  );
}

export default App;
