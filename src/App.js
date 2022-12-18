import './App.css';
import Tab from './components/Tab'
import Weapons from './components/Weapons'
import Overlay from './components/Overlay'

function App() {
  return (
    <div className="App">
      <Tab component={<Weapons/>} tabImg='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Shuffle_icon.svg/500px-Shuffle_icon.svg.png'/>
      <Overlay/>
      
    </div>
  );
}

export default App;
