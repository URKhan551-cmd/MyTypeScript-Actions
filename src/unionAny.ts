//  Unions Type

// UNIONS are the type where we can write different type on behalf of upcoming data
// like we can use OR | pipeline to devide the type maybe it come string maybe it is numbber

let decide: number | string = "1M"   // valid
decide = 56;   // valid

// mode of apiRequest we can annotate modes and that is why we caled union
let apiRequest: 'pending' | 'success' | 'error' = "success";
// this apiRequest can be "error" can be "pending"
apiRequest = "error";
apiRequest = "pending";
//  apiRequest = "done"; // wrong error because we didnot defined it before we will get defined values.

let eat: 'biryani' | 'fruitChat' | 'roastChicken' = "biryani"  // other than these values we cannot give it to eat variable.

// eat = 'polaw' .   that will cause an error which is not defined or not in modes so called unions


let finds = ['20', '32', '44', '55'];
let choose;  // here the choose is  any  type which mean it doesnot matter what you will put inside it

// we can annotate and automatically infer   'any'

for (const find of finds) {
    if (find === '44') {
        choose = find;
        break
    }
}
console.log(choose)  // herre the choose has two possible type  one is 'undefined' and second is 'string'.
// what we have to do now


// look at this now what we wanna add we can easily change. which cause problem in scalanility
// let describe: any;  // avoid any in any condition

// let describe: string | undefined;   here we craete union of that variable it can give us two possible outcome
// let describe: number | string;   here also the same two possible value outcome  number and string;

// let describe: number | string | boolean;  here three possible outcome,
// let describe: boolean;  // other than boolean type can cause an error

// Avoid ANY Avoid Avoid Avoid;
let describe: any;
describe = 56;
describe = 'byt';
describe = true;
describe = ['superman'];

let orders = ['22', '33', '55'];
let currentOrder: string | undefined;

for (let order of orders) {
    if (order === '33') {
        currentOrder = order;
        break
    }
    currentOrder = "11";
}
console.log(currentOrder);