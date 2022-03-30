import { stringify } from "querystring";
import {Human} from "./type/Human";

export function makeHuman(name : string , age: number, address: string): Human {
  const newHuman = {
    name : name,
    age: age,
    address: address,
  }
  return newHuman;
};

export function humanName(human: Human): string {
  return human.name;
}

export function totalAge (...human : Human) : number {
  
}