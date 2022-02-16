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

const isIndexOfPatternTop = (a,b) => {
  if(a.indexOf(b) === 0){
    return 0
  }
}

module.exports = {
  sum,
  makeUser,
  makeRange,
  checkDiff,
  unionString,
  isIndexOfPatternTop
};