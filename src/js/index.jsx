import ReactDOM from 'react-dom';
import React    from 'react';

require('!style!css!sass!./../sass/index.scss');

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
          <td key={`slot${militaryHour}Su`} className={times[`${time}Su`] ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'Su')}></td>
          <td key={`slot${militaryHour}M`} className={times[`${time}M`] ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'M')}></td>
          <td key={`slot${militaryHour}T`} className={times[`${time}T`] ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'T')}></td>
          <td key={`slot${militaryHour}W`} className={times[`${time}W`] ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'W')}></td>
          <td key={`slot${militaryHour}Th`} className={times[`${time}Th`] ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'Th')}></td>
          <td key={`slot${militaryHour}F`} className={times[`${time}F`] ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'F')}></td>
          <td key={`slot${militaryHour}Sa`} className={times[`${time}Sa`] ? 'filled' : 'unfilled'} onClick={this.handleClick.bind(this, `${time}`, 'Sa')}></td>
        </tr>
      )
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
}

class Test extends React.Component {

  componentDidMount () {
    window.RAM_component = ReactDOM.findDOMNode(this.refs['RAM_reference']);
  }

  render () {
    return (
      <RAM ref="RAM_reference" />
    )
  }
}

ReactDOM.render(<Test />, document.getElementById('app-container'));