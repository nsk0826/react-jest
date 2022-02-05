const sum = (a, b) => {
  return a + b;
};

const makeUser = (name, age) => {
  return {
    name,
    age,
  };
};

module.exports = {
  sum,
  makeUser,
};