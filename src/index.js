const sum = (a, b) => {
  return a + b;
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

module.exports = {
  sum,
  makeUser,
  makeRange,
};