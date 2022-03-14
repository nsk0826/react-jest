import React from 'react';
import ReactDOM from 'react-dom';
import { Sample2 } from './sample2';

const sum = (a, b) => {
  return a + b;
};

const checkDiff = (v, v2) => {
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

const getIndexOfNumber = (a, b) => {
  return a.indexOf(b)
}

const isIndexOfPatternTop = (a, b) => {
  return !a.indexOf(b)
}

const isIndexOfPatternBottom = (a, b) => {
  console.log(a.endsWith(b))
  return a.endsWith(b)
}

const sampleFunction = () => {
  console.log("Hello world")
  return "Hello japan"
}

const sampleFunctionArgs = (a = "hi!") => {
  console.log(a)
  return a + " world"
}

const sampleFunctionArgs2 = (a) => {
  console.log(a)
  return a + " fukuoka"
}

const sumReducer = (obj) => {
  console.log(obj)
  let arr = obj.map(o => o['num']);
  console.log(arr)

  const reducer = (accumulator, currentValue ) => accumulator + currentValue;
  let i = arr.reduce(reducer);
  return i
}

const checkTestNull= (arg) => {
  if(arg == null){
    return "null"
  }
  return "not null"
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


// ReactDOM.render(
//   <Sample2 />,
//   document.getElementById('root')
// );


module.exports = {
  sum,
  makeUser,
  makeRange,
  checkDiff,
  unionString,
  isIndexOfPatternTop,
  getIndexOfNumber,
  isIndexOfPatternBottom,
  sampleFunction,
  sampleFunctionArgs,
  sampleFunctionArgs2,
  sumReducer,
  checkTestNull,
};
