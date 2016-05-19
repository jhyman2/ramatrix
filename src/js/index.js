import React      from 'react';
import ReactDOM   from 'react-dom';

class RAM extends React.Component {

  constructor () {
    super();
  }

  handleClick () {
    console.log(this);
  }

  render () {
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
            <tr>
              <td>12-1</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>1-2</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>2-3</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>3-4</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>4-5</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>5-6</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>6-7</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>7-8</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>8-9</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>10-11</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>11-12</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>12-1</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>1-2</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>2-3</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>3-4</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>4-5</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>5-6</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>6-7</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>7-8</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>8-9</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>9-10</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>10-11</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
            <tr>
              <td>11-12</td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
              <td onClick={this.handleClick.bind(this)}></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<RAM />, document.getElementById('app-container'));