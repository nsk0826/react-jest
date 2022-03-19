import {Human} from "./type/Human";

export function makeHuman(name : string , age: number): Human {
  const newHuman = {
    name : name,
    age: age
  }
  return newHuman;
};