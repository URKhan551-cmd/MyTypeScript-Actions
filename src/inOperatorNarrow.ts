// What is the in operator (JS first)
// In plain JavaScript:
// "prop" in obj 👉 Means:"oes this object (or its prototype chain) have this property?”

const obj = { a: 1 };

console.log("a" in obj); // true
console.log("b" in obj); // false

// How TypeScript uses it (important)
// TypeScript uses "prop" in obj as a type guard to narrow union types.

// “optional properties will exist in both sides”
type Fish = { swim?: () => void };
type Bird = { fly?: () => void };
type Human = { swim?: () => void; fly?: () => void };

type animal = Fish | Bird | Human;

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    // what is animal here?
  }
}

// Possible types: Fish ✅ (has swim)
// Human ✅ (also has swim)
// 👉 So TS narrows to:
// Fish | Human

// in operator checks: ✔ property existence (key presence)  It does NOT check:
// ❌ value existence
// ❌ function validity

// INTERVIEW PURPOSE
// The in operator narrows union types by checking property existence,
// but when properties are optional, narrowing becomes partial because the property may or may not exist at runtime.

type shark = { swim: () => void };
type eagle = { fly: () => void };
type umair = { swim?: () => void; fly?: () => void };
 
type janwar = shark | eagle | umair;
function perform(janwar: shark | eagle | umair) {
  if ("swim" in janwar) {
    janwar;
      
    //   (parameter) janwar: shark | umair;
  } else {
    janwar;
      
    //   (parameter) janwar: eagle | umair;
  }
}


// instanceof NARROWING IN typesvript
class Car {}

const c = new Car();

console.log(c instanceof Car); // true

// c.__proto__ === Car.prototype

// Now TypeScript’s role TypeScript uses this runtime check as a type guard.

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
               
// (parameter) x: Date
  } else {
    console.log(x.toUpperCase());
               
// (parameter) x: string
  }
}

// Edge Case (Advanced)
const d = new Date();
const fake = { toUTCString: () => "fake" };
fake instanceof Date // false

// 👉 Even if it looks like Date, it’s NOT
// Because:
// Prototype chain doesn’t match\

// Error handling
// function handle(error: Error | string) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   } else {
//     console.log(error.toUpperCase());
//   }
// }
// Example: API parsing
// if (response instanceof Response) {
//   // fetch API response
// }


//  Concept       Checks
//  `typeof`      primitive type
//  `in`          property existence
//  `instanceof`  prototype chain (class identity)

function checkVal(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// INTERVIEW PURPOSE

// instanceof is a runtime operator that checks whether an object’s
//  prototype chain includes a constructor’s prototype.TypeScript 
//  leverages this to narrow union types involving
// class instances into more specific types within conditional branches.