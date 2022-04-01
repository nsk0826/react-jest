import { stringify } from "querystring";
import { createSecureContext } from "tls";
import { Human } from "./type/Human";

export function makeHuman(name: string, age: number, address: string): Human {
  const newHuman = {
    name: name,
    age: age,
    address: address,
  };
  return newHuman;
}

export function humanName(human: Human): string {
  return human.name;
}

export function totalAge(humans: Human[]): number {
  const total:number = humans.reduce((p: number, current: Human): number => {
    return p + current.age;
  },0);
  return total;
}

export const numberFilterAddress = (humans: Human[], address: string):number => {



  return 1
}