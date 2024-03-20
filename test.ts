// interface State {
//     name: string;
//     capital: string;
// }
// const states: State[] = [
//     {name: 'Alabama', capital: 'Montgomery'},
//     {name: 'Alaska', capital: 'Juneau'},
//     {name: 'Arizona', capital: 'Phoenix'}
// ]

// for (const state of states) {
//     console.log(state.capital);
// }

// const x: Number | null = null
// interface Square {
//     kind : 'square';
//     width: number;
// }
// interface Rectangle {
//     kind: 'rectangle',
//     height: number;
//     width: number;
// }

// type Shape = Square | Rectangle;
// function cal(shape: Shape) {
//     if (shape.kind === 'rectangle') {
//         return shape.width * shape.height;
//     } else {
//         return shape.width * shape.width;
//     }
// }

class Square {
  constructor(public width: number) {}
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}
type Shape = Square | Rectangle;
function cal(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

function asNumber(val: number | string): number {
  return typeof val === "string" ? Number(val) : val;
}

function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      turnLightOn();
      break;
    case false:
      turnLightOff();
      break;
    default:
      console.log(`I'm afraid I can't do that.`);
  }
}
function turnLightOn() {
  console.log("turnLightOn");
}
function turnLightOff() {
  console.log("turnLightOff");
}

interface LightApiResponse {
  lightSwitchValue: boolean;
}
async function setLight() {
  const response = await fetch("/light");
  const result: LightApiResponse = await response.json();
  setLightSwitch(result.lightSwitchValue);
}
// let blah: boolean ;
// setLightSwitch(blah);
// function add(a: number, b: number);
//  function add(a: string, b: string);

//  function add(a,b) {
//   return a + b;
//  }

interface Vector2D {
  x: number;
  y: number;
}

function calculateLen(v: Vector2D) {
  return v.x + v.y;
}

interface NameVector {
  name: string;
  x: number;
  y: number;
}

const v: NameVector = { name: "a", x: 3, y: 4 };
calculateLen(v);
interface Vector3D {
  x: number;
  y: number;
  z: number;
}
// const vec3D = {x : 3, y: 4, z:5, address: 'a'}
// function calculateLengthL1(v: Vector3D) {
//   let length = 0;

//   for (const axis of Object.keys(v)) {
//     const coord = v[axis];
//     // ~~~~~~~ Element implicitly has an 'any' type because ...
//     //         'string' can't be used to index type 'Vector3D'
//     length += Math.abs(coord);
//   }
//   return length;
// }
function calculateAge(birthDate: Date): number {
  // ...
  return 1;
}
let birthDate: any = "1990-01-19";
calculateAge(birthDate); // OK

let blah = 1;

function logMessage(msg: string | null) {
  if (msg) {
    msg;
    console.log(msg);
  }
}

type AB = "A" | "B";
type AB12 = "A" | "B" | 12;
const a: AB = "A";

const ab: AB = Math.random() < 0.5 ? "A" : "B";
const ab12: AB12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}
// declare let twelve: AB12;
// const back: AB = twelve;
interface Person {
  name: string;
}

interface LifeSpan {
  birth: Date;
  death?: Date;
}

type PersonSpan = Person & LifeSpan;

const ps: PersonSpan = {
  name: "abc",
  birth: new Date("1912/06/23"),
  death: new Date("1912/06/23"),
};

type K = keyof (Person | LifeSpan);
type S = keyof AB12;
interface PersonSpan2 extends Person {
  age: string;
}

type PS2 = keyof PersonSpan2;

function getKey<K extends string>(val: any, key: K) {}
getKey({}, "x");
getKey(23, ab);
// getKey({},12);
type blah = keyof PersonSpan;

interface Staff {
  name: string;
  role: string;
  age: number;
}

type StaffKeys = keyof Staff;
function sortBy<T, K extends keyof T>(list: T[], key: K): T[] {
  const blah = list.sort((a, b) =>
    a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
  );
  return blah;
}

let list: Staff[] = [
  { name: "nguyen van a", role: "cvcc", age: 29 },
  { name: "nguyen van c", role: "cvcd", age: 30 },
  { name: "nguyen van b", role: "cvac", age: 31 },
];
printVal(sortBy(list, "age"));
console.log("=================");
printVal(sortBy(list, "name"));
console.log("=================");
printVal(sortBy(list, "role"));
console.log("=================");

function printVal<T extends Staff>(list: T[]) {
  list.forEach((value) => {
    console.log(`name: ${value.name} age: ${value.age} role: ${value.role}`);
  });
}

const funcA = function (a: number): number {
  return 0;
};
const funcB = (a: number): number => {
  return 0;
};
type BlahFunc = (a: number) => number;
declare function BLohFunc(a: number): number;
