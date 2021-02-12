import './App.css';
import store from './store/index';
import update_person from './actions/personActions'
import update_game from './actions/gameActions'


function updatePerson () {
  store.dispatch(update_person)
}

function updateGame() {
  store.dispatch(update_game)
}

function App() {
  return (
    <div className="App">
      <h1>Redux Learning Baby</h1>
      <h2>Person Name: { store.getState().person.name }</h2>
      <h3>Game Name: { store.getState().game.name }</h3>
      <hr />
      <button onClick={updatePerson}>Update Person</button>
      <br />
      <hr />
      <button onClick={updateGame}>Update Game</button>
      <br />
      <hr />
    </div>
  );
}

export default App;
