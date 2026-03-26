// to design an array in ts like for string we can do string[], number[] called string array number array
// Use Array when:
// Unknown length
// Same type
// Iteration heavy
const ingredients: string[] = ["spices", "sweets"];
const prices: number[] = [2, 45, 66, 77, 88];

// in this Array<> wih angular bracket we can put defined data type , or custom data type also
const rating: Array<number> = [3, 4, 56, 7, 8, 7.8, 5.5]
let nums: number[] = [1, 2, 3]
let numsAlt: Array<number> = [1, 2, 3]

// Both are identical — Array<T> is just a generic type.

// unions arrays 
let mixed: (string | number)[] = [1, "hello"]  
// can be string or number

// Readonly Arrays (Immutability)  no modifictaion 

const arr: readonly number[] = [1, 2, 3]
const cities: readonly string[] = ["peshawer",  "dubai"]
// arr.push(4)  wrong

const arr2: ReadonlyArray<number> = [1, 2, 3];


// object Array
type city = {
    name: string;
    location: number
}

const menu: city[] = [
    { name: "mohala", location: 654 },
    {name: "malak latif", location: 3344}

]


// multidimentionalArray  Array[][]
const jungle: number[][] = [
    [2, 6, 6],
    [6, 7, 8]
] 


// TUPLES
// Fixed length
// Fixed types at each index
// give us restriction about how the index has filled you have to put the same values and properties
// fixed index position if mentioned string first must fill string forst in Array or number SO ON

// Use Tuple when:
// Fixed structure
// Position matters

let mix: [string, number] = ["sheyrii", 65];
let chess: [number, string] = [77, "hjujd"];

// here boolean is optioanl if we provide or not does not matter
let optional: [number, string, boolean?] = [67, "khann"]
let optional2: [number, string, boolean?] = [67, "khann", true];

// readonly tupples
const notChange: readonly [number, number] = [44, 66];

// named tupless
const items: [name: string, price: number] = ["masaka", 77]

// Rest in Tuples
type Numbers = [number, ...number[]]
let x: Numbers = [1, 2, 3, 4]
// 👉 First is fixed, rest flexible


/// ENUMS

// Use Enum when:
// Finite known values
// Business logic states

enum shoes {
    SMALL,
    MEDIUM,
    LARGE
}
const choose = shoes.LARGE


enum status {
    PENDING = 100,
    SERVED = 101,
    CANCELLED = 102
}

enum typos {
    SHOES = "shoes",
    CHAPAL = "chapal"
}

function buying(type: typos) {
    console.log(`let buy ${type}`);
}

buying(typos.CHAPAL);


enum randomEnum {
    ID = 2,
    VAL = "kharedo"
}


// Array of Enums
enum Role {
  Admin = "ADMIN",
  User = "USER"
}

let roles: Role[] = [Role.Admin, Role.User]

// Tuple with Enum
enum Status {
  Success = "SUCCESS",
  Error = "ERROR"
}

let response: [Status, string] = [Status.Success, "Done"]

// Array of Tuples
let users: [string, number][] = [
  ["Ali", 25],
  ["Sara", 30]
]

// Enum as Index Constraint
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let moves: Direction[] = [Direction.Up, Direction.Left]

