import ReactDOM from 'react-dom';
import React    from 'react';

require('!style!css!sass!./../sass/index.scss');

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

    this.props.getDataFn(key);
  }

  render () {
    const tableRows = [];
    const timeMap   = this.state.times;
    const getDataFn = this.props.getDataFn;

    for (let militaryHour = 0; militaryHour < 24; militaryHour++) {
      let amPm = militaryHour < 12 ? 'AM' : 'PM';
      let hour = militaryHour % 12;
      let time = `${hour}${amPm}`;

      tableRows.push(
        <tr key={`row${militaryHour}`}>
          <td key={`time${militaryHour}`}>{hour ? hour : 12}-{hour+1}{amPm}</td>
          <td key={`slot${militaryHour}Su`} className={timeMap.get(`${time}Su`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'Su')}></td>
          <td key={`slot${militaryHour}M`} className={timeMap.get(`${time}M`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'M')}></td>
          <td key={`slot${militaryHour}T`} className={timeMap.get(`${time}T`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'T')}></td>
          <td key={`slot${militaryHour}W`} className={timeMap.get(`${time}W`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'W')}></td>
          <td key={`slot${militaryHour}Th`} className={timeMap.get(`${time}Th`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'Th')}></td>
          <td key={`slot${militaryHour}F`} className={timeMap.get(`${time}F`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'F')}></td>
          <td key={`slot${militaryHour}Sa`} className={timeMap.get(`${time}Sa`) ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'Sa')}></td>
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

const getDataFn = (data) => {
  console.log(data);
};

ReactDOM.render(<RAM getDataFn={getDataFn.bind(this)} />, document.getElementById('RAM-container'));