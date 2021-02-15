import './App.css';
import store from './store/store';
import update_game from './actions/gameActions';
import update_person from './actions/personActions';
import { connect } from 'react-redux';

function updatePerson () {
  store.dispatch(update_person);
}

function updateGame () {
  store.dispatch(update_game)
}

function App(props) {
  // console.log(props)
  return (
    <div className="App">
      <h1>Happy Learning React-Redux !</h1>
      <h2>Person Name: {props.person.name}</h2>
      <h2>Person Game: {props.game.name}</h2>
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

const mapStateToProps = state => {
  console.log('mapStateToProps:')
  console.log(state)
  return state;
}

export default connect(mapStateToProps)(App);
