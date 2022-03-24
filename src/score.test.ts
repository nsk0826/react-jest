import {sumScore } from "./score";

describe("#score", () => {
  it("sum", () => {
    expect(sumScore(1,4)).toBe(5);
  });
});
