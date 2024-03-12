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
    constructor(public width: number, public height: number){
        super(width)
    }
}
type Shape = Square | Rectangle;
function cal(shape: Shape) {
    if (shape instanceof Rectangle) {
        return shape.width * shape.height ;
    } else {
        return shape.width * shape.width;
    }
}


function asNumber(val : number | string) : number {
    return typeof(val) === 'string' ? Number(val) : val;
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
function turnLightOn() {}
function turnLightOff() {}