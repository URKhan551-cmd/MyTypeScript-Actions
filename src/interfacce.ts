// interfaces are quite similar to type
// interface define structure    not generating any code


interface Look{
    hair: string
    beard: number
    coat?: boolean
}

const shahrukh: Look = {
    hair: "black",
    beard: 789
}


interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {
    id: 5,
    name: "bilal chapal store"
}



// how to handle function in ts by help of interface
// interface just define structure not puting value inside of it

interface Calculator {
    (price: number ) : number  // definition
}
const applyCalculator: Calculator = (p) => p * 0.5; // usage


interface TeaMachine {
    // start(price: number): void      valid
    start(): void;
    stop(): void
}
const machine: TeaMachine = {
    start() {
        console.log("Start");
    },

    stop() {
        console.log("Stop");
    }
}


// index signature
interface Flavour{
    [color: string] : number
}
const rating: Flavour = {
    blue: 6,
    green: 7
}


interface User {
    name : string
}
interface User {
    age: number
}
// here  we get two similar interfaces that will merge in the end and finalley where we wanna use we should use both user.

const u: User = {
    name: "khan",
    age: 67
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {
    // now C has both interface access oof A and B which holds striings value
}