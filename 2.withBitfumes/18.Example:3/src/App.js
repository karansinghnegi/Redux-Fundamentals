import update_game from './actions/gameActions';
import update_person from './actions/personActions';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>Redux Tutorial</h1>
       Person Name: {props.person.name}
       <button onClick={props.updatePerson}>Update Person</button>
       <br />
       Game Name: {props.game.name}
       <button onClick={props.updateGame}>Update Game</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    game:   state.game,
    person: state.person
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateGame:   () => { dispatch(update_game) },
    updatePerson: () => { dispatch(update_person)}
  }
}

// console.log(mapStateToProps())

export default connect(mapStateToProps, mapDispatchToProps)(App);
