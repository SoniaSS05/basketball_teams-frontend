import './App.css';
import TeamContainer from './Components/TeamContainer'
import PlayerContainer from './Components/PlayerContainer'

function App() {
  return (
    <div className="App">
     <h1>Basketball Teams</h1>
        <TeamContainer/>
        <PlayerContainer/>
    </div>
  );
}

export default App;
