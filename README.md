# array-table-search

> Search on an array that are that holds data for tables

## Table of Contents

* [Why?](#why)
* [Installation](#installation)
* [Functions](#functions)
* [Usage](#usage)
* [License](#license)

## Why?

I wanted to have a simple way to search on multiple columns on a table component in react.

## Installation

```sh
$ npm i array-table-search -S
```

or

```sh
$ yarn add array-table-search
```

## Functions

Take a look into the [usage section](#usage) for a detailed example.

### multiColumnSearchArrayTable

This function can filter (search) on multiple object keys (one row).
Only if all applied filters are `true` the object (row) is in the returned data set.

#### Syntax

Returns a new array.

```js
const searchedData = multiColumnSearchArrayTable(data, options);
```

##### Parameters

* **data**: an array of object
  * each object represents one row
  * each key of one object has to be the name of the column
  * each value of a of a key of one object is the value of the cell in the table
* **options**: an object
  * the keys in that object has to be the name of the column
  * each key holds another object with two keys (type, value)
  * type is the search type (includes, exact)
  * value is the search value for this column

### searchArrayTable

This function can filter (search) on the complete object (one row).
If one key value filter is `true` the object (row) is in the returned data set.

#### Syntax

Returns a new array.

```js
const searchedData = searchArrayTable(data, options);
```

##### Parameters

* **data**: an array of object
  * each object represents one row
  * each key of one object has to be the name of the column
  * each value of a of a key of one object is the value of the cell in the table
* **options**: an object
  * this object has two keys (type, value)
  * type is the search type (includes, exact)
  * value is the search value for this column

## Usage

An example how to use it.

```js
const { multiColumnSearchArrayTable } = require('array-table-search');
const { searchArrayTable } = require('array-table-search');

/*
  the data that is contained in the table
  each row represented by an object
  each column represented by the keys used in the objects
*/
const data = [
  {
    number: 1,
    first: 'Mark',
  },
  {
    number: 2,
    first: 'Jacob',
  },
  {
    number: 3,
    first: 'Larry',
  },
];

/*
  for multi column search
  each column has a type (searchType)
  and a value (searchValue)
  the value would usually come from an event (change in input etc.)
*/
const searchOptionMultiColumn = {
  number: {
    type: 'includes', // or exact
    value: '',
  },
  first: {
    type: 'includes', // or exact
    value: 'ar',
  },
};

/*
  for table search we only need
  a type (search type)
  a value (search value)
  the value would usually come from an event (change in input etc.)
*/
const searchOptionTable = {
  type: 'includes', // or exact
  value: 'ar',
};

/*
  returns a new array

  const searchedMultiColumnData = [
    {
      number: 1,
      first: 'Mark',
    },
    {
      number: 3,
      first: 'Larry',
    },
  ];
*/
const searchedMultiColumnData = multiColumnSearchArrayTable(data, searchOptionMultiColumn);
/*
  returns a new array

  const searchedTableData = [
    {
      number: 1,
      first: 'Mark',
    },
    {
      number: 3,
      first: 'Larry',
    },
  ];
*/
const searchedTableData = searchArrayTable(data, searchOptionTable);
```

## License

MIT © Lukas Aichbauer
