
// why we have been repeating our order signature, why signature because order has same vlaues in both  the functions
// function restaurent(order: { type: string; sugar: number; spicy: boolean }) {
//     console.log(order)
// }

// function hotel(order: { type: string; sugar: number; spicy: boolean }) {
//     console.log(order)
// }

// thats why we create a type where we assign values like spicy type, and sugar inside of it 
// now we can use this type order  many times in our project 

type order = {
    type: string;
    sugar: number;
    spicy: boolean;
}
function restaurent(Order: order) {
    console.log(Order)
}
// Order is a parameter and order has it type
// we dont know how many times we will repaet the data type so we donot want to
//  brreak consistency to explicit define it then use aas a single value.
// for reusability purpose.    on the go is also well n good

function hotel(Order: order) {
    console.log(Order)
}


type hero = {
    superman: number;
    spiderman: number;
}
// inside marvel if we write explicit type or interface it works in both conditon 
class marvel implements hero {
    superman: 100;
    spiderman: 50
}

// here error appears because of custom data type are not gonna use in class
// here we need interface

// type shoes = "nike" | "underArmor";

interface shoes {
    brand: "nike" | "underArmor"
}

class buy implements shoes {
    brand: "nike" | "underArmor" = "nike";
}

// mostly we have been using interfaces inside the classes but sometime somehow types works.

// apiRes class will not work with response type cause error 
// type response = { ok: true } | { ok: false }
interface response { req: { ok: true } | { ok: false } }

// class apiRes implements response {
//     ok: boolean = true;
// }


// UNIONS type 
// here these three values can be accessible otherwise nothing else works.like "coffee" nooo.
type food = "roti" | "rice" | "fastfood"

function letsEat(eat: food){
    console.log(eat)
}


// INTERSECTION IN TS
// now pizza has value and burger also has value
// we put both types in junk type
// now junk has both values it has to be possible for  both values not just for one 
// in the waiter variable we must add both value as junk type has 
type pizza = { cheese: number };
type burger = { zinger: number };

type Junk = pizza & burger

const waiter: Junk = {
    cheese: 5,
    zinger: 3
}


//
type user = {
    username: string;
    bio?: string
}
const u1: user = {
    username: "umiar"
}

const u2: user = { username: "umairKhnn", bio: "struggle.ur" }

//


type config = {
    readonly appName: string
    version: number
}

const myApp: config = {
    appName: "unpredictable",
    version: 7.7
}

// myApp.appName = "khann" error cause because readoly property first put for forever
// that will wrong becuase version can be change 
myApp.version = 8.1  
