import * as React from 'react';
import * as Reducers from './reducers';

import './App.css';
import logo from './logo.svg';

import { connect } from 'react-redux';
import { Component, ComponentProps } from './components';

function select(state: Reducers.CalcAppState): ComponentProps {
  return {
    calc: state.calc,
  };
}

const ConnectComponent = connect(select)(Component);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">こんにちは React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ConnectComponent />
      </div>
    );
  }
}

export default App;
