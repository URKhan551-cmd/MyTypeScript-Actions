// here we will see kind of unique behavior of ts
//  like here in api response we explicit write any so the Ts infers internally that type is string.
// but by explicit any doesnot let it to be sring  
let response: any = "55";
// when we assign respomse to numericVal which has explicit type number so acccording to that numericVal has response
// that response should has capability to apply method on like .length but still nooothing happen
// let numericVal: number = response.

// this is so called forcefully type assertion with (parenthesis as type). now response is capable to work with method
let numericVal: any = (response as string)

type book = {
    name: string
}

let buyBook = '{"name": "undefined law of money"}';
let bookStore = JSON.parse(buyBook) as book

console.log(bookStore);


// inside the typescript everything has its own type
// this is called type assertion 
const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "use";
value = 44
value = [4, 4, 6]
value.toUpperCase();

// there is an error in last beause of unknown. you must defined valued 
let newValue: unknown;
newValue = "use";
newValue = 44
newValue = [4, 4, 6]
// newValue.toUpperCase();
if (typeof newValue === "string") {
    newValue.toUpperCase();
}


try {
    
} catch (error) {
    // console.log(error.message)  not good practice in pro, when we use error: any so we dont know the messsage will come or not
    // remove any type from error 
    // if error is an instanceof Error class where error defined and have message there so we can use it
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}


const data: unknown = "let me see"
// const strData: string = data        when we assign data to strData it show error because data has unknown till now it does not has capability as string.
const strData: string = data as string   
// here we explicit assign string to data it show we tell to ts that data has string type so he got me and data is now capable of to works with method


// type decision = "admin" | "manager"
// what value i get in return i do not care about that because of = "void" 
// function makeDecision(role: decision): void{
//     if (role === "admin") {
//         console.log("redirect it to admin dashboard");
//         return;
//     } 
//     if (role === "manager") {
//         console.log("manager has to take decision")
//         return
//     }
//     role;     here when i hover over role it shows type is never because there is no value left all the cases are handle precisely.
// }

type decision = "admin" | "manager" | "superAdmin"

function makeDecision(role: decision): void{
    if (role === "admin") {
        console.log("redirect it to admin dashboard");
        return;
    } 
    if (role === "manager") {
        console.log("manager has to take decision")
        return
    }
    // here when i hover over role it shows "superAdmin"  here is the one left to handle
    role;     
}


function neverReturn(): never{
    // some function never end like infinite loop like server has beem waiting to get request and do some work on 
    while(true){}
}