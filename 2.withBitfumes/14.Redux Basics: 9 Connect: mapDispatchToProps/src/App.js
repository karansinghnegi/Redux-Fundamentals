import './App.css';
import update_game from './actions/gameActions';
import update_person from './actions/personActions';
import { connect } from 'react-redux';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>Happy Learning React-Redux !</h1>
      <h2>Person Name: {props.person.name}</h2>
      <h2>Person Game: {props.game.name}</h2>
      <hr />
      <button onClick={props.updatePerson}>Update Person</button>
      <br />
      <hr />
      <button onClick={props.updateGame}>Update Game</button>
      <br />
      <hr />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    game:   state.game,
    person: state.person
  }
}

const mapDispatchToProps = dispatch => {

  return { 
    updateGame:   () => { dispatch(update_game)   },
    updatePerson: () => { dispatch(update_person) } 
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(App);
