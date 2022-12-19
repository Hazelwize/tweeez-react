import './App.css';
import Tab from './components/Tab'
import Weapons from './components/Weapons'
import Overlay from './components/Overlay'
import GameInfo from './components/GameInfo'

function App() {
  return (
    <div className="scroller App">
      <Tab number="1" component={<GameInfo/>} tabImg='https://img.icons8.com/dotty/512/timetable.png'/>
      <Tab number="2" component={<Weapons/>} tabImg='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Shuffle_icon.svg/500px-Shuffle_icon.svg.png'/>
      <Tab number="3" component={<Weapons/>} tabImg='https://img.icons8.com/ios/512/man-wants-to-pee.png'/>
      <Overlay/>
      
    </div>
  );
}

export default App;
