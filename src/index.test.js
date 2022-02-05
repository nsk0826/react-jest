const { sum,makeUser } = require('./index');

describe('test index.js file', () => {
  it('sums a and b', () => {
    let result = sum(1, 2);
    expect(result).toBe(3);
    result = sum(3, 4);
    expect(result).toBe(7);
    expect(sum(1,5)).toBe(6);
  });

  it('makes a person', () => {
    expect(makeUser('Yakuza', 20)).toEqual({
      name: 'Yakuza',
      age: 20,
    });expect(makeUser('taro', 25)).toEqual({
      name: 'taro',
      age: 25,
    });
  });
});