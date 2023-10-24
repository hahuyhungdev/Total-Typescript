// EXTRACT
// example 1 :
type Animals = "Dog" | "Cat" | "Fish" | "Bird";
// just get animal living on land
type LandAnimals = Extract<Animals, "Dog" | "Cat">;

// example 2 :
type TEvent =
  | {
      type: "mousedown";
      x: number;
      y: number;
    }
  | {
      type: "mouseup";
      x: number;
      y: number;
    }
  | {
      type: "blur";
    };
type Square = Extract<TEvent, { x: number }>;

// example 3:Extract all strings/booleans/numbers from a union
type PossibleValues =
  | "admin"
  | "user"
  | "guest"
  | true
  | false
  | 1
  | 2
  | 3
  | null
  | undefined;
type Strings = Extract<PossibleValues, string>; // type Strings = "admin" | "user" | "guest";

// To exclude null and undefined from PossibleValues, we can use Exclude: with {}
type NotNull = Extract<PossibleValues, {}>; // type NotNull = boolean | 1 | "admin" | "user" | "guest" | 2 | 3

// Find common members between two unions

type EnglishSpeakingCountries = "UK" | "USA" | "Canada";
type CountriesInWesternHemisphere = "USA" | "Canada" | "Mexico";
//To find the common countries between these two unions, we can use the Extract utility type like this:
type CommonCountries = Extract<
  EnglishSpeakingCountries,
  CountriesInWesternHemisphere
>;

// example 4:
type Person = {
  name: string;
  age: number;
  yearOfBirth: 1;
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

// conditional type filter string keys
type filterStringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type Result = filterStringKeys<Person>;

const testResult: Result = "name";
