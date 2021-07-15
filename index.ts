let myName: string = "Mahdi";
let age: number;

let isHungry: boolean = false;

type StringOrNumber = number | string;

let studentId: StringOrNumber = 54565;
studentId = "web4-5545";

type PersonType = { name: string; age: number; hobby: string };

interface Person {
  name: string;
  age: number;
  hobby?: string;
}

let person: PersonType = {
  name: "mahdi",
  age: 12,
  hobby: "sleeping",
};

let person2: Person = {
  name: "aaa",
  age: 14,
};

// array
interface Object {
  name: string;
  age: number;
  hobby?: string;
}

const numbers: (number | string)[] = [10, 20, 30, 40];
const persons: Person[] = [
  {
    name: "mahdi",
    age: 25,
  },
  {},
  {},
];

// functions

const greeting = (name: string): void => {
  console.log(`hello ${name}`);
};
greeting("Mahdi");

const add = (a: number, b: number): number => {
  return a + b;
};

const introduce = ({ name, age, hobby }: Object): void => {
  console.log(`Hello ${person.name}`);
};

const getArray = <Type>(arr: Type[]): Type[] => {
  return arr;
};
getArray<string>(["mahdi", "abc"]);
getArray<number>([123, 456]);

// enum

enum Week {
  Sat,
  Sun,
  Mon,
  Tue,
  Wed,
  Thus,
  Fri,
}
console.log(Week.Sat)
