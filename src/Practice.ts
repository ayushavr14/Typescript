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

/////////////////////////////////////////////////////////////////////////////////////

//enum
enum Gender {
  male = "Male",
  female = "Female",
}

const gender1: Gender = Gender.female;

//Tuple - exactly how many elements in an array?

let arr: [number, string] = [1, "ayush"];
(arr[0] = 5), "ayush";
// arr[0]="ayush",5 error

// Generics - A way of passing types to function along side parameters

const getIdentity = <T>(arg: T): T => {
  return arg;
};

let x: string = "hello";
let y: number = 1;
let z: boolean = true;

getIdentity<string>(x);
getIdentity<number>(y);
getIdentity<boolean>(z);
getIdentity(null);

const useState = (arg: number): [number, (a: number) => void] => {
  let v: typeof arg = arg;

  const setV = (newValue: number): void => {
    v = newValue;
  };
  return [v, setV];
};

//////////

class Car {
  chaiseNumber: number;
  name: string;
  constructor(chaiseNumber: number, name: string) {
    this.chaiseNumber = chaiseNumber;
    this.name = name;
  }
}

type IndicaPlace = "Mumbai" | "factory1" | "factory2";
type IndicaEngineCC = 1000 | 1500 | 2000;
type IndicaTypeSizes = "18" | "22" | "26";

class Indica extends Car {
  fuelCapicity: number;
  engineCC: IndicaEngineCC;
  typeSizes: IndicaTypeSizes;
  place: IndicaPlace;
  constructor(
    fuelCapicity: number,
    engineCC: IndicaEngineCC,
    typeSizes: IndicaTypeSizes,
    place: IndicaPlace
  ) {
    super(Date.now(), "Indica");
    this.place = place;
    this.fuelCapicity = fuelCapicity;
    this.engineCC = engineCC;
    this.typeSizes = typeSizes;
  }
}

let indica1 = new Indica(50, 1500, "18", "factory1")


// Example

type NexonPlace = "factory1" | "factory2";
type NexonEngineCC = 1500 | 2000 | 2500;
type NexonTyreSizes = "24" | "26";
type NexonType="Petrol"|"Desiel"|"EV"

class Nexon extends Car {
  fuelCapicity?: number;
  engineCC?: NexonEngineCC;
  tyreSizes: NexonTyreSizes;
  place: NexonPlace;
  type: NexonType;
  constructor(
    tyreSize: NexonTyreSizes,
    place: NexonPlace,
    type: NexonType,
    fuelCapicity?: number,
    engineCC?: NexonEngineCC,
    ) {
    super(Date.now(), "Nexon");
    this.place = place;
    if(fuelCapicity){
      this.fuelCapicity = fuelCapicity;
    }
    if(engineCC){
      this.engineCC = engineCC;
    }
    this.tyreSizes = tyreSize;
    this.type = type;
  }
    }

let nexon1 = new Nexon("24","factory1","EV")

