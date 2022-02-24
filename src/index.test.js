import { sum, makeUser, makeRange, checkDiff, unionString, isIndexOfPatternTop, getIndexOfNumber, isIndexOfPatternBottom, sampleFunction, sampleFunctionArgs} from './index';

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

  it('diff ', () => {
    expect(checkDiff(1, 4)).toBe(false);
  });

  it('not diff ', () => {
    expect(checkDiff(1, 1)).toBe(true);
  });

  it('文字列結合', () => {
    expect(unionString("a", "b")).toBe("ab");
  });

  it('isIndexOfPatternTop true', () => {
    expect(isIndexOfPatternTop("abc", "a")).toBe(true);
  })

  it('isIndexOfPatternTop false', () => {
    expect(isIndexOfPatternTop("abc", "bc")).toBe(false);
  })

  it('getIndexOfNumber 0', () => {
    expect(getIndexOfNumber("abcdefg", "a")).toBe(0);
  })

  it('getIndexOfNumber 1', () => {
    expect(getIndexOfNumber("abcdefg", "bc")).toBe(1);
  })

  it('getIndexOfBottom true', () => {
    expect(isIndexOfPatternBottom("abcdefg", "g")).toBe(true);
  })

  it('getIndexOfBottom false', () => {
    expect(isIndexOfPatternBottom("abcdefg", "f")).toBe(false);
  })

  it('アロー関数　引数なし', () => {
    expect(sampleFunction()).toBe("Hello japan");
  })

});