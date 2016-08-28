import React    from 'react';
import ReactDOM from 'react-dom';

import RAM from '../src/js/index.jsx';

class TestComponent extends React.Component {

  getData () {
    console.log(this._myMatrix.getData());
  }

  render () {
    const background = {
      border: '5px solid blue'
    };

    const cellWidth = {
      width: '40px'
    };

    return (
      <div>
        <button onClick={this.getData.bind(this)}>Get the data!</button>
        <RAM
          ref={(c) => this._myMatrix = c}
          militaryTime={true}
          containerStyle={background}
          cellWidth={cellWidth}
        />
      </div>
    );
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('app-container'));