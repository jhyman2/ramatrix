[![Stories in Ready](https://badge.waffle.io/jhyman2/ramatrix.png?label=ready&title=Ready)](https://waffle.io/jhyman2/ramatrix) [![npm](https://img.shields.io/npm/dt/ramatrix.svg?maxAge=2592000)](https://www.npmjs.com/package/ramatrix)
# Ramatrix (React Availability Matrix)

> A react component to gather a user's hourly availability.

## Install
```
npm install ramatrix --save
```

## Usage within a React component
```
import Ramatrix from 'ramatrix';

// call this function when you want to get the matrix data
getMatrixData () {
  console.log(this._myMatrix.getData()); // "{"7AMTh":true,"8AMTh":true.....
}

render () {
  return (
    <Ramatrix ref={(c) => this._myMatrix = c}/>
  );
}
```

[Try it out!](https://jhyman2.github.io/ramatrix)

## Customizable options
Props can be passed for data and styling customization

`militaryTime - boolean (true/false) | default - false`
 - Will display hours from 0 - 23 or 12AM - 12PM

`containerStyle - reactStyling object | default - display: inline-block;`
 - styling that will be applied to outer container

`cellWidth - reactStyling object | default - 65px`
 - width that will be applied to individual cells

`customID - string | default - 'RAM-container'`
 - id assigned to parent div of component

`tableClassName - string | default - 'RAM-table'`
 - className of the table element

`tableHeadName - string | default - 'RAM-header'`
 - className of the table head element

`tableBodyName - string | default - 'RAM-body'`
 - className of the table body element

![SSS1](https://github.com/jhyman2/ramatrix/blob/master/screenshot.png?raw=true)

<h2>Authors</h2>
* [jhyman2](https://github.com/jhyman2)
* [kevcoxe](https://github.com/kevcoxe)

<h2>Links</h2>
* [git repo](https://github.com/jhyman2/ramatrix)
* [npm](https://www.npmjs.com/package/ramatrix)
