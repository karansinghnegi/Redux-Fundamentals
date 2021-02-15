import './App.css';
import store from './store/store';
import update_game from './actions/gameActions';
import update_person from './actions/personActions';

function updatePerson () {
  store.dispatch(update_person);
}

function updateGame () {
  store.dispatch(update_game)
}

function App() {
  return (
    <div className="App">
      <h1>Happy Learning React-Redux !</h1>
      <h2>Person Name: {store.getState().person.name}</h2>
      <h2>Person Game: {store.getState().game.name}</h2>
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
