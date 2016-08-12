# Ramatrix (React Availability Matrix)

> A react component to gather a user's hourly availability.

## Install
```
npm install ramatrix --save
```

## Usage within a React component
```
import Ramatrix from 'ramatrix';

componentDidMount () {
  // reference to component
  this.myMatrix = ReactDOM.findDOMNode(this.refs['myMatrix']);
}

getMatrixData () {
  console.log(this.myMatrix.getAttribute('data')); // "{"7AMTh":true,"8AMTh":true.....
}

render () {
  return (
    <Ramatrix ref="myMatrix" />
  );
}
```
![SSS1](https://github.com/jhyman2/ramatrix/blob/master/screenshot.png?raw=true)

## Contribute/Development
<h3>Dependencies</h3>
You will need to have Node (6), Gulp, webpack, and webpack-dev-server installed on your system globally. After installing node, run
the following:

```
npm install -g gulp webpack webpack-dev-server
```

<h3>Compiling for development</h3>

Simply run `npm install` and `gulp build-dev` from the root of the project.  This will load webpack-dev-server on port 8080.

<h3>Preview in a browser!</h3>
```
localhost:8080
```

<h3>Compiling for production</h3>

Run `npm install` and `gulp build`. This will output the built JS into the `dist` directory.

<h2>Technologies/Libraries</h2>

* ES2015 (ES6)
* Gulp
* Node
* React
* SASS
* Webpack

<h2>Authors</h2>
* [jhyman2](https://github.com/jhyman2)

<h2>Links</h2>
* [git repo](https://github.com/jhyman2/ramatrix)
* [npm](https://www.npmjs.com/package/ramatrix)