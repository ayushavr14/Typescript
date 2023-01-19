console.log("hello");

// Primitives Data Types: string, number, boolean, null, undefined.
// object, array,
// Ts convert ES6 to ES5 for better understanding of browsers.

// Write Types

let a: string = "hello";

let b: number = 1;
b = 123;
// b="error"

let c: boolean = true;

// string literal
let variable: "hello" = "hello";
// variale ="Hello" error

// string literals with union operator.
let gender: "male" | "female" = "female";

let age: number | string = "23";
age = "23";
age = "twenty three";

// any: Bad way to type "any".

// array

let arr1: Array<number> = [1, 2, 3, 4];
let arr2: readonly number[] = [1, 2, 3, 4];
// arr2.push(3,4) error because of readonly.

let arr3: Array<string> = ["A", "B", "C"];
let arr4: string[] = ["A", "B", "C"];

let arr5: Array<number | string> = [1, 2, "A", "B", 3, 4];

// object
// age is optional key.

type user = { id: number; name: string; age?: number };

let user1: user = { id: 1, name: "ayush" };

let arr_users: user[] = [
  { id: 1, name: "ayush", age: 21 },
  { id: 2, name: "verma" },
  { id: 3, name: "abc" },
  { id: 4, name: "xyz" },
];

// Assignment
type user1 = {
  rollNo: number;
  name: string;
  batch: "A-1" | "A-2";
  class: number;
  age?: number;
};

let students: user1[] = [
  { rollNo: 1, name: "ayush verma", batch: "A-1", class: 2 },
  { rollNo: 2, name: "verma", batch: "A-2", class: 2, age: 21 },
];

let cartItems: {
  id: number;
  products: { id: number; name: string; price: number; quantity: number }[];
  total: number;
}[] = [
  {
    id: 1,
    products: [
      { id: 1, name: "Naruto action figure", price: 3000, quantity: 1 },
      { id: 2, name: "Hinata action figure", price: 3000, quantity: 1 },
    ],
    total: 6000,
  },
  {
    id: 2,
    products: [
      { id: 1, name: "Lee action figure", price: 3000, quantity: 1 },
      { id: 2, name: "Gara action figure", price: 3000, quantity: 1 },
    ],
    total: 6000,
  },
];
