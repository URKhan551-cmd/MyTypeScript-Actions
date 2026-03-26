// in function we have to discuss two most imp case is data present and how do i get output

function make(type: string, kind: number) {
    console.log(`what should i ${type} and how many ${kind}`);

}
make("spicy", 7);

function getPrice(): number{
    return 90;
}

// function makeOrder(order: string) { in this function we can expect null also not just string that is why we have to handle it precisely.

//     if (!order) return null;
//     return order;
// }

function makeOrder(order: string): string {
    // if (!order) return null;     here i explicitly define the output or return also which will be string that is must now .
    return order;
    // the order should be string there is no doubt no need to check this to get null or anything else 
}

// there is nothing output of that function that we have to expect so no expectation simple use void
function logFunc(): void{
    console.log("everything is ready")
}

// DEFAULT AND OPTIONAL PARAMETER
function optioinalVal(order?: string) {
    // if there is a parameter like order that should be string if no order nothing. 
}


function defaultVal(order: string = "Ready default val") {
    // if there is order parameter that is good but if there is no order then assign "ready default val". 
}


// here i have too many values of order type but we expect return type should be number.

function shop(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}): number{
    return 6
}