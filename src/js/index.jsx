import React from 'react';

// require('!style!css!sass!./../sass/index.scss');

const DAYS = ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'];

class RAM extends React.Component {

  constructor () {
    super();

    this.state = {
      times: {}
    }
  }

  handleClick (time, day) {
    let key    = `${time}${day}`;
    let newVal = {};

    newVal[`${key}`] = !this.state.times[key];

    this.setState({
      times: Object.assign(this.state.times, newVal)
    });
  }

  prepareRowData (militaryHour, time, times) {
    const rowData = [];

    for (let i = 0; i < DAYS.length; i++) {
      rowData.push(
        <td
          key={`slot${militaryHour}${DAYS[i]}`}
          className={times[`${time}${DAYS[i]}`] ? 'filled' : 'unfilled'}
          onClick={this.handleClick.bind(this, `${time}`, DAYS[i])}
        />
      );
    }

    return rowData;
  }

  componentDidMount() {
    console.log('deez nuts');
  }

  render () {
    const tableRows = [];
    const times     = this.state.times;
    const getDataFn = this.props.getDataFn;

    for (let militaryHour = 0; militaryHour < 24; militaryHour++) {
      let amPm = militaryHour < 12 ? 'AM' : 'PM';
      let hour = militaryHour % 12;
      let time = `${hour}${amPm}`;

      tableRows.push(
        <tr key={`row${militaryHour}`}>
          <td key={`time${militaryHour}`}>{hour ? hour : 12}-{hour+1}{amPm}</td>
          {this.prepareRowData(militaryHour, time, times)}
        </tr>
      );
    }

    return (
      <div id="RAM-container" data={JSON.stringify(this.state.times)}>
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
};

export default RAM;