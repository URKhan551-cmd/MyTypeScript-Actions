// mostly typescript infers the types of a variables if we did not explicitly give it.
// infers means by itself typesciprt get an idea what the type of variable would be.
// infer type 
let theme = "googly"

let calculus = Math.random() > 0.5 ? 10 : 5;

let myName = "Urkahn"

// myName = 456  wrong types infers by typescript, no overwritten


// this is called annotation, where we explicitly put type. other than that type will cause an error.


// let choose: string = 3453  wrong type deceleration
let choose: string = "salad and bread";

// let multiply: number = "khan * wali";   wromg type decleration cause an error.
let multiply: number = 8 * 4;

// we can overwrite with assign same type what we wrote or given before.
// choose = 7   wrong overwritten    error
// multiply = "umair"     wrong overwritten.  error


choose = "khalid bin waleed";  // valid
multiply = 8;    // valid


let whoWon: boolean = true;

