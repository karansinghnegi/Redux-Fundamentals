import update_game from './store/actions/gameActions';
import update_person from './store/actions/personActions'
import fetch_user from './store/actions/userActions'

import { connect } from 'react-redux'


function App(props) {
  console.log(props)
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Redux Tutorial with Bitfumes</h1>
      <hr/>
      <h2><span style={{color: 'red'}}>Person Name:</span> {props.person.name}</h2>
      <button onClick={props.updatePerson}>Update Person</button>
      <hr />
      <h2><span style={{color: 'green'}}>Game Name:</span> {props.game.name}</h2>
      <button onClick={props.updateGame}>Update Game</button>
      <hr/>
      <h2><span style={{color: 'orange'}}>Users </span><button onClick={props.fetchUsers}>Fetch Users</button></h2>
      {
        props.users.length === 0 ? <p>No User Found</p>:
        props.users.map(user => <p key={user.id}>{user.id} - {user.first_name} - {user.email}</p>)
      }
      <hr />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    game: state.game,
    person: state.person,
    users: state.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateGame:   () => { dispatch(update_game) },
    updatePerson: () => { dispatch(update_person) },
    fetchUsers:   () => { dispatch(fetch_user) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
