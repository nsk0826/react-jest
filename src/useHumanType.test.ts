import {
  makeHuman,
  humanName,
  totalAge,
  numberHumanAddress,
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
  
});
