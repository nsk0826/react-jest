import { makeHuman } from "./useHumanType";
describe('useHuman' , (): void => {
  test('makeHuman', (): void => {
    expect(makeHuman(
      "taro", 5)).toEqual({
        name: "taro",
        age: 5
      });
  });  
})