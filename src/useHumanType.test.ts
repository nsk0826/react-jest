import {
  makeHuman,
  humanName,
  totalAge,
  numberHumanAddress,
  isNumberBiggerFor,
  isNumberMiniFor,
  makeProf,
} from "./useHumanType";

describe("useHuman", (): void => {
  test("makeHuman", (): void => {
    expect(makeHuman("taro", 5, "fukuoka")).toEqual({
      name: "taro",
      age: 5,
      address: "fukuoka",
    });
  });
  test("humanName", (): void => {
    const taro = makeHuman("taro", 5, "tosu");

    expect(humanName(taro)).toBe("taro");
  });
  test("humanName２", (): void => {
    const taro = makeHuman("二郎", 5, "saga");

    expect(humanName(taro)).toBe("二郎");
  });

  test("totalAge", (): void => {
    const ichiro = makeHuman("一郎", 40, "saga");
    const jiro = makeHuman("二郎", 20, "saga");
    const saburo = makeHuman("三郎", 10, "saga");

    const humans = [ichiro, jiro, saburo];

    expect(totalAge(humans)).toBe(70);
  });

  test("totalAddressCnt", (): void => {
    const ichiro = makeHuman("一郎", 40, "Fukuoka");
    const jiro = makeHuman("二郎", 20, "saga");
    const saburo = makeHuman("三郎", 10, "Fukuoka");

    const humans = [ichiro, jiro, saburo];

    expect(numberHumanAddress(humans, "Fukuoka")).toBe(2);
  });
  test("totalAddressCnt0", (): void => {
    const ichiro = makeHuman("一郎", 40, "Fukuoka");
    const jiro = makeHuman("二郎", 20, "saga");
    const saburo = makeHuman("三郎", 10, "saga");

    const humans = [ichiro, jiro, saburo];

    expect(numberHumanAddress(humans, "nakasu")).toBe(0);
  });

  test("totalAddressCnt3", (): void => {
    const ichiro = makeHuman("一郎", 40, "Fukuoka");
    const jiro = makeHuman("二郎", 20, "Fukuoka");
    const saburo = makeHuman("三郎", 10, "Fukuoka");

    const humans = [ichiro, jiro, saburo];

    expect(numberHumanAddress(humans, "Fukuoka")).toBe(3);
  });

  test("mock test", (): void => {
    const myMock = jest.fn();

    const b = 100;
    const bound = myMock.bind(b);
    bound();

    console.log(myMock.mock.instances);

    //expect(numberHumanAddress()).toBe(3);
  });

  test("age filter ", (): void => {
    const ichiro = makeHuman("一郎", 40, "Fukuoka");
    const jiro = makeHuman("二郎", 20, "Fukuoka");
    const saburo = makeHuman("三郎", 10, "Fukuoka");

    const humans = [ichiro, jiro, saburo];

    const results = isNumberBiggerFor(humans, 10);

    expect(isNumberBiggerFor(humans, 10)).toEqual([
      { address: "Fukuoka", age: 40, name: "一郎" },
      { address: "Fukuoka", age: 20, name: "二郎" },
    ]);
  });

  test("age filter 9以上", (): void => {
    const ichiro = makeHuman("一郎", 40, "Fukuoka");
    const jiro = makeHuman("二郎", 20, "Fukuoka");
    const saburo = makeHuman("三郎", 10, "Fukuoka");

    const humans = [ichiro, jiro, saburo];

    expect(isNumberBiggerFor(humans, 9)).toEqual([
      { address: "Fukuoka", age: 40, name: "一郎" },
      { address: "Fukuoka", age: 20, name: "二郎" },
      { address: "Fukuoka", age: 10, name: "三郎" },
    ]);
  });

  test("age filter 41以上", (): void => {
    const ichiro = makeHuman("一郎", 40, "Fukuoka");
    const jiro = makeHuman("二郎", 20, "Fukuoka");
    const saburo = makeHuman("三郎", 10, "Fukuoka");

    const humans = [ichiro, jiro, saburo];

    expect(isNumberBiggerFor(humans, 41)).toEqual([]);
  });

  test("age min 41未満", (): void => {
    const ichiro = makeHuman("一郎", 40, "Fukuoka");
    const jiro = makeHuman("二郎", 20, "Fukuoka");
    const saburo = makeHuman("三郎", 10, "Fukuoka");

    const humans = [ichiro, jiro, saburo];

    expect(isNumberMiniFor(humans, 41)).toEqual(3);
  });

  test("age min 10未満", (): void => {
    const ichiro = makeHuman("一郎", 40, "Fukuoka");
    const jiro = makeHuman("二郎", 20, "Fukuoka");
    const saburo = makeHuman("三郎", 10, "Fukuoka");

    const humans = [ichiro, jiro, saburo];

    expect(isNumberMiniFor(humans, 10)).toEqual(0);
  });
  test("age min 11未満", (): void => {
    const ichiro = makeHuman("一郎", 40, "Fukuoka");
    const jiro = makeHuman("二郎", 20, "Fukuoka");
    const saburo = makeHuman("三郎", 10, "Fukuoka");

    const humans = [ichiro, jiro, saburo];

    expect(isNumberMiniFor(humans, 11)).toEqual(1);
  });

  test.each([
    [{ name: "一郎", age: 10, address: "tokyo" }, "一郎"],
    [{ name: "次郎", age: 8, address: "saga" }, "次郎"],
  ])(".test(%o, %p)", (a, expected) => {
    expect(humanName(a)).toBe(expected);
  });

  test.each([
    [{ name: "一郎", age: 10, address: "tokyo" }, "一郎は10歳"],
    [{ name: "次郎", age: 8, address: "saga" }, "次郎は8歳"],
  ])(".numberHumanAddress (%p, %p)", (a, expected) => {
    expect(makeProf(a)).toBe(expected);
  });

  test.each([
    [{ name: "", age: 10, address: "tokyo" }, "は10歳"],
    [{ name: "", age: 8, address: "saga" }, "は8歳"],
  ])(".名前の入力が無い時 (%p, %p)", (a, expected) => {
    expect(makeProf(a)).toBe(expected);
  });
});
