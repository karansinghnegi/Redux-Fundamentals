import update_game from './actions/gameActions';
import update_person from './actions/personActions';
import fetch_user from './actions/userActions';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1>Redux Tutorial</h1>
       Person Name: {props.person.name}
       <button onClick={props.updatePerson}>Update Person</button>
       <br />
       Game Name: {props.game.name}
       <button onClick={props.updateGame}>Update Game</button>
       <br />
       Users: <button onClick={props.fetchUsers}>Fetch Users</button>
       {
         props.users.length === 0 ? <p>No User Found</p> :
         props.users.map(users => <p key={users.id}>{users.id}</p>)
       }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    game:   state.game,
    person: state.person,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateGame:   () => { dispatch(update_game) },
    updatePerson: () => { dispatch(update_person)},
    fetchUsers:   () => { dispatch(fetch_user) }
  }
}

// console.log(mapStateToProps())

export default connect(mapStateToProps, mapDispatchToProps)(App);
