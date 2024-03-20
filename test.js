// interface State {
//     name: string;
//     capital: string;
// }
// const states: State[] = [
//     {name: 'Alabama', capital: 'Montgomery'},
//     {name: 'Alaska', capital: 'Juneau'},
//     {name: 'Arizona', capital: 'Phoenix'}
// ]
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    constructor(width) {
        this.width = width;
    }
}
class Rectangle extends Square {
    constructor(width, height) {
        super(width);
        this.width = width;
        this.height = height;
    }
}
function cal(shape) {
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
function asNumber(val) {
    return typeof val === "string" ? Number(val) : val;
}
function setLightSwitch(value) {
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
function setLight() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("/light");
        const result = yield response.json();
        setLightSwitch(result.lightSwitchValue);
    });
}
function calculateLen(v) {
    return v.x + v.y;
}
const v = { name: "a", x: 3, y: 4 };
calculateLen(v);
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
function calculateAge(birthDate) {
    // ...
    return 1;
}
let birthDate = "1990-01-19";
calculateAge(birthDate); // OK
let blah = 1;
function logMessage(msg) {
    if (msg) {
        msg;
        console.log(msg);
    }
}
const a = "A";
const ab = Math.random() < 0.5 ? "A" : "B";
const ab12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}
const ps = {
    name: "abc",
    birth: new Date("1912/06/23"),
    death: new Date("1912/06/23"),
};
function getKey(val, key) {
}
getKey({}, "x");
getKey(23, ab);
function sortBy(list, key) {
    const blah = list.sort((a, b) => a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
    return blah;
}
let list = [
    { name: 'nguyen van a', role: 'cvcc', age: 29 },
    { name: 'nguyen van c', role: 'cvcd', age: 30 },
    { name: 'nguyen van b', role: 'cvac', age: 31 },
];
printVal(sortBy(list, 'age'));
console.log('=================');
printVal(sortBy(list, 'name'));
console.log('=================');
printVal(sortBy(list, 'role'));
console.log('=================');
function printVal(list) {
    list.forEach(value => {
        console.log(`name: ${value.name} age: ${value.age} role: ${value.role}`);
    });
}
//# sourceMappingURL=test.js.map