import React      from 'react';
import ReactDOM   from 'react-dom';

class RAM extends React.Component {

  constructor () {
    super();
  }

  handleClick (time, day) {
    // @todo
    console.log(time, day);
  }

  render () {
    const tableRows = [];

    for (let i = 0; i < 24; i++) {
      let x = i % 12;

      tableRows.push(
        <tr>
          <td>{i ? i : 12}-{i+1}</td>
          <td onClick={this.handleClick.bind(this, x, 'Su')}></td>
          <td onClick={this.handleClick.bind(this, x, 'M')}></td>
          <td onClick={this.handleClick.bind(this, x, 'T')}></td>
          <td onClick={this.handleClick.bind(this, x, 'W')}></td>
          <td onClick={this.handleClick.bind(this, x, 'Th')}></td>
          <td onClick={this.handleClick.bind(this, x, 'F')}></td>
          <td onClick={this.handleClick.bind(this, x, 'Sa')}></td>
        </tr>
      )
    }

    return (
      <div id="wrapper">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tues</th>
              <th>Wed</th>
              <th>Thurs</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<RAM />, document.getElementById('app-container'));