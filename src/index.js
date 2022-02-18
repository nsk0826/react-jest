import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const sum = (a, b) => {
  return a + b;
};

const checkDiff = (v , v2) => {
  return v === v2;
};

const makeUser = (name, age) => {
  return {
    name,
    age,
  };
};

const makeRange = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

const unionString = (a, b) => {
  return a + b;
};

const getIndexOfNumber = (a,b) => {
  return a.indexOf(b)
}

const isIndexOfPatternTop = (a,b) => {
  return !a.indexOf(b)
}

class IndexSample extends React.Component {

  render() {
    return (
      <div>
        <h1>Sample...</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <IndexSample />,
  document.getElementById('root')
);


module.exports = {
  sum,
  makeUser,
  makeRange,
  checkDiff,
  unionString,
  isIndexOfPatternTop,
  getIndexOfNumber
};
