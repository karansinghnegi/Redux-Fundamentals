import './styles.scss';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

const initialState = {
  count: 0,
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// CREATING ACTION CREATOR

const incrementValue = () => ({
  type: INCREMENT,
});

const decrementValue = () => ({
  type: DECREMENT,
});

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      count: state.count - 1,
    };
  }
  return state;
};

const store = createStore(reducer);

class Counter extends Component {
  render() {
    const { count, incrementValue, decrementValue } = this.props;
    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={incrementValue}>Increment</button>
          <button onClick={decrementValue}>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

/** *
 MOST BASIC WAY of doing Dispatching: 

const mapDispatchToProps = (dispatch) => {
  return {
    increment() {
      dispatch(incrementValue());
    },
    decrement() {
      dispatch(decrementValue());
    },
  };
};

**/

/**  Modern Way without using bindActionCreators 
 
const mapDispatchToProps = {
  return {
    incrementValue,
    decrementValue
  }
}

**/

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      incrementValue,
      decrementValue,
    },
    dispatch,
  );
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root'),
);
