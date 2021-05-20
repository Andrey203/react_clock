import React from 'react';

import { Clock } from './components/Clock/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    clockName: -1,
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    console.log('The Clock was renamed from oldName to newName');
  }

  render() {
    return (
      <div className="App">
        <Clock name={this.state.clockName} />
        <button
          type="button"
          className="btn set-name"
          onClick={() => {
            this.setState({ clockName: Math.round(Math.random() * 100) });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
