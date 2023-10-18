// EXTRACT
// example 1 :
type Animals = "Dog" | "Cat" | "Fish" | "Bird";
// just get animal living on land
type LandAnimals = Extract<Animals, "Dog" | "Cat">;

// example 2 :
type Shapes =
  | { type: "circle"; radius: number }
  | { type: "square"; sideLength: number }
  | { type: "triangle"; base: number; height: number };
type Square = Extract<Shapes, { type: "square" }>;

// example 3 :
type Person = {
  name: string;
  age: number;
  address: string;
  huy: boolean;
};
type test = {
  a: never;
  b: string;
  c: number;
};
// get all keys of Person
type StringKeys = Extract<keyof Person, string>;
// conditional type
type filterStringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type Result = filterStringKeys<Person>;

const testResult: Result = "name";

// --------------------------------------------------------------------

// export type Obj = {
//   a: "a";
//   a2: "a2";
//   a3: "a3";
//   b: "b";
//   b1: "b1";
//   b2: "b2";
// };

// type ValuesOfKeysStartingWithA<Obj> = {
//   [K in Extract<keyof Obj, `a${string}`>]: Obj[K];
// }[Extract<keyof Obj, `a${string}`>];
// type ValuesOfKeysStartingWithA1<Obj> = {
//   [K in Extract<keyof Obj, `a${string}`>]: Obj[K];
// };
// type testValue1 = ValuesOfKeysStartingWithA<Obj>;
// type testValue = ValuesOfKeysStartingWithA1<Obj>;
