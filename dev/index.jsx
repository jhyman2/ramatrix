import React from 'react';
import ReactDOM from 'react-dom';

import RAM from '../src/js/index.jsx';

class TestComponent extends React.Component {

  getData () {
    console.log(this._myMatrix.getData());
  }

  render () {
    return (
      <div>
        <button onClick={this.getData.bind(this)}>Get the data!</button>
        <RAM ref={(c) => this._myMatrix = c} />
      </div>
    );
  }
}


ReactDOM.render(<TestComponent />, document.getElementById('app-container'));