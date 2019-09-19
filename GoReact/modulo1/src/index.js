import React, { Component, Fragment } from 'react';

import { render } from 'react-dom';

import Button from './Button';

import './style.scss';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    counter: 0,
  };

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <h1 className="title">Hello Rocketseat</h1>
        <h2 style={{ color: '#f00' }}>{counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </>
    );
  }
}

render(<App />, document.getElementById('app'));
