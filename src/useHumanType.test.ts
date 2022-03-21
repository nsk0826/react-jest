import { makeHuman , humanName} from "./useHumanType";
describe('useHuman' , (): void => {
  test('makeHuman', (): void => {
    expect(makeHuman(
      "taro", 5)).toEqual({
        name: "taro",
        age: 5
      });
  });
  test('humanName', (): void => {
    const taro = makeHuman(
      "taro", 5)

    expect(humanName(taro)).toBe("taro")
  });    
})