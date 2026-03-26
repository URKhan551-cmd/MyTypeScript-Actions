const obj = {
    name: "umairyyuy",
    price: 55,
    isOkay: true
}
// inside TS automatic infers the type of an obj value

// {
//     name: string;
//     price: number;
//     isOkay: boolean
// }

// declaring obj type
let shoes: {
    name: string;
    price: number;
    isOkay: boolean
}
shoes =  {
    name: "khan",
    price: 56,
    isOkay: true
}


type kitchen = {
    name: string;
    price: number;
    ingredients: string[]
}
const meraKitchen: kitchen = {
    name: "orient",
    price: 780,
    ingredients: ["boxes", "spoons", "knife"]
}



// type shoes = { size: string };
// let smallShoes: shoes = { size: "39m" }
// let bigShoes: shoes = { size: "44m" }
// smallShoes = bigShoes;

type shoes = { size: string };
let smallShoes: shoes = { size: "39m" }
let bigShoes: shoes = { size: "44m", material: "rubber" }
// there will be no error because bare minimum properties are same so no problem 
smallShoes = bigShoes;

type brew = { brewTime: number }

const coffee = { brewTime: 5, beans: "Arfican" }
const chaiNBrew: brew = coffee


// if i get values in u more than type defined thast okay no issues has been in ts
// but if i defined values in type biut some missing in variable that cause an issue

type user = {
    username: string;
    password: string
}
const u: user = {
    username: "Umahjbjk",
    password: "87uhiguyg78"
}



type Address = { name: string; quantity: number }
type Location = {
    street: string; pinCode: number
}

type order = {
    id: string;
    location: Location[];
    address: Address;
}


//  this partial keyword let us to get one or two or all values does not matter how many values we defined.
type doodh = {
    name: string;
    price: number;
    isHot: boolean
}

const garamDoodh = (order: Partial<doodh>) => {
    console.log("updating order with", order);
}
garamDoodh({ price: 70 })
garamDoodh({ isHot: true })
garamDoodh({})


// here in Reqiured area we need to pass all the possible  type to function 
type motorCycle = {
    name?: string;
    quantity?: number
}

const runBike = (start: Required<motorCycle>) => {
    console.log(start);
}

runBike({ name: "ducatti", quantity: 4 });


// Pick   we use this keyword to get some values and do work with it
type milkSHake = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type choose = Pick<milkSHake, "name" | "price">;

const getBuy: choose = {
    name: "strawberrymilkshake",
    price: 77
}



// OMIT   is also a keyowrd which is used to omit the keywords
type coffee = {
    name: string;
    price: number;
    isNew: boolean;
    secretIngredients: string[]
}

type nescafe = Omit<coffee, "secretIngredients">;

const newFunc = (nescafe: "name") => {}