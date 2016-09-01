import React    from 'react';
import ReactDOM from 'react-dom';

import RAM from '../src/js/index.jsx';

class TestComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      style: {
        background: {
          border: '5px solid blue'
        },
        cellWidth: {
          width: '40px'
        }
      },
      useCustomStyle: false,
      matrixData: ""
    };
  }

  getData () {
    console.log(this._myMatrix.getData());
    this.setState({
      matrixData: this._myMatrix.getData()
    });
  }

  __changeSelection(selected) {
    this.setState({
      useCustomStyle: !selected
    });
  }

  render () {

    const { style, useCustomStyle, matrixData } = this.state;

    const background = useCustomStyle ? style.background : null;
    const cellWidth = useCustomStyle ? style.cellWidth : null;

    return (
      <div>
        <RAM
          ref={(c) => this._myMatrix = c}
          militaryTime={true}
          containerStyle={background}
          cellWidth={cellWidth}
        />
        <br />
        <div>
          <button onClick={this.getData.bind(this)}>Get the data!</button>
          <div>
            <label>Use custom styles</label>
            <input type="checkbox" checked={useCustomStyle} onChange={this.__changeSelection.bind(this, useCustomStyle)} />
          </div>
          <textarea value={matrixData} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('app-container'));
