import React      from 'react';
import ReactDOM   from 'react-dom';

class RAM extends React.Component {

  constructor () {
    super();

    this.state = {
      times: new Map()
    }
  }

  handleClick (time, day) {
    let key = `${time}${day}`;

    this.setState({
      times: this.state.times.set(key, !this.state.times.get(key))
    });
  }

  render () {
    const tableRows = [];

    for (let militaryHour = 0; militaryHour < 24; militaryHour++) {
      let amPm = militaryHour < 12 ? 'AM' : 'PM';
      let hour = militaryHour % 12;

      tableRows.push(
        <tr key={`row${militaryHour}`}>
          <td key={`time${militaryHour}`}>{hour ? hour : 12}-{hour+1}{amPm}</td>
          <td key={`slot${militaryHour}Su`} className={this.state.times.get(`${hour}${amPm}Su`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${hour}${amPm}`, 'Su')}></td>
          <td key={`slot${militaryHour}M`} className={this.state.times.get(`${hour}${amPm}M`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${hour}${amPm}`, 'M')}></td>
          <td key={`slot${militaryHour}T`} className={this.state.times.get(`${hour}${amPm}T`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${hour}${amPm}`, 'T')}></td>
          <td key={`slot${militaryHour}W`} className={this.state.times.get(`${hour}${amPm}W`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${hour}${amPm}`, 'W')}></td>
          <td key={`slot${militaryHour}Th`} className={this.state.times.get(`${hour}${amPm}Th`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${hour}${amPm}`, 'Th')}></td>
          <td key={`slot${militaryHour}F`} className={this.state.times.get(`${hour}${amPm}F`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${hour}${amPm}`, 'F')}></td>
          <td key={`slot${militaryHour}Sa`} className={this.state.times.get(`${hour}${amPm}Sa`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${hour}${amPm}`, 'Sa')}></td>
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