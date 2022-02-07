const { sum, makeUser, makeRange } = require('./index');

describe('test index.js file', () => {
  it('sums a and b', () => {
    let result = sum(1, 2);
    expect(result).toBe(3);
    result = sum(3, 4);
    expect(result).toBe(7);
    expect(sum(1, 5)).toBe(6);
  });

  it('sums a and b2', () => {
    let result = sum(2, 2);
    expect(result).toBe(4);
    result = sum(4, 4);
    expect(result).toBe(8);
    expect(sum(1, 2)).toBe(3);
  });

  it('makes a person', () => {
    expect(makeUser('Yakuza', 20)).toEqual({
      name: 'Yakuza',
      age: 20,
    }); expect(makeUser('taro', 25)).toEqual({
      name: 'taro',
      age: 25,
    });
  });

  it('has 3', () => {
    expect(makeRange(1, 4)).toContain(3);
  });

});