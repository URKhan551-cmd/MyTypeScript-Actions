// narrowing gives us clarity to choose the best type by asking question like if(){} according to the upcoming data
// check by askng question like if the type of given parameter is string then return something that give us hint about string.
// otherwise return something is not string that will be number
// because we have just with two possible outcome .
// IMP
// after clarify the type we can use . to check methods we can get access to use it on, according to the specific type.



function createMe(kind: string | number) {
    if (typeof kind === "string") {
        return `Thats my Name: ${kind}...`
    }
    return `My num Value: ${kind}`
}


// we can do optional checking if the parameter given then do something otherwise ...
// here if msg exist then return something accordding to string the one we got if not clarify must.
function callMe(msg?: string) {
    if (msg) {
        return `I got a call: ${msg}`
    }
    return "NO one call me yet. no msg exist."
}


// exhaustive check :  type narrowing
// here we have unions modes and number type where we have to figure it out which one will be the outcome.

function getAdmit(which: "hospital" | "school" | "tuition" | number) {
    if (which === "hospital") {
        return `he is suffered of malaria ${which}`
    }
    if (which === "school" || which === "tuition") {
        return `He is going to study: ${which}`
    }
    return `He is a millionare ${which}`
}


// IMPORTANT  { GUARD RAILS }
// here we craete two class which has been giving us same method but how do i confirm this method came from
// by help of instanceof methid we will get the class name from where it comes.
// here in function the products has been coming from two possible values
// from newbook and sports how we confirm that by asking question if products are instance of newbook then products.buy() will give us a chemistry book.
// but if the products are instanceof sports that will return a football. 
class newBook{
    buy() {
        return `I will buy a chemistry book`
    }
}
class sports{
    buy() {
        return `I wanna buy a Football`
    }    
}

function buy(products: newBook | sports) {
    if (products instanceof newBook) {
        return products.buy();
    }
    return products.buy();
}


// IMPORTANT   we can create our own types.
// here we have our type called letBuy which has two values whose type is string and price should be number.
// we created a function hyperMarket to check this the  key  we got as parameter we dont know so consider   any .
//  after that the output type should be same as  letBuy type.
// now we will narrow down the kay: any to confirm the output.

type letBuy = {
    type: string
    price: number
}

function hyperMarket(key: any): key is letBuy{
    return (
        typeof key === "object" && 
        key !== null &&
        typeof key.type === "string" &&
        typeof key.price === "number"
    )
}

function buyNow(item: letBuy | string) {
    if (hyperMarket(item)) {
        return `I love this ${item.type} and How much it cost ${item.price}`
    }
    return `i did not find my: ${item} of products inside the mart`
}



// let do some more examples on type keyword
// we create type where we defined values in it there are two possible values
// then we put all these types into one type called perfume
//  it mean perfume can be tombFord can be gucci can be dolceNGabbana  there will be one perfume.
// then we pass the value to function order type is perfume . then how could you narrow this to find which kind of perfume it is.
// we use switch case where we use order.type according to the values like level and type we choose type value inside the types of prfumes
// case shows us the value of type tomb gucci or gabbana
// orrrrr we can use order.level alsoo
// but here we just use order.type
// if case has "order.type = tobbacoVanille" then return perfume type should be tombFord.
// if case has "order.type = desertOUd" should return perfume type dolceNGabbana
// if case has "order.type = gucciFloral" should return type of perfume called gucci.


type tombFord = { type: "tobbacoVanilla"; level: number };
type gucci = { type: "gucciFloral"; level: number };
type dolceNGabbana = { type: "desertOud"; level: number };

type perfume = tombFord | gucci | dolceNGabbana;

function pureMixture(order: perfume) {
    switch (order.type) {
        case "tobbacoVanilla":
            return `tombFord`
            break;
        case "desertOud":
            return `dolceNGabbana`
            break;
        case "gucciFloral":
            return `gucci`
            break;
    }
}

// As we’ve seen, JavaScript supports a typeof operator
//  which can give very basic information about the type of values we have at runtime.
// "string" "number" "bigint" "boolean" "symbol" "undefined" "object" "function"

// second example

type chai = lipton | indiaGate | basmati;

type lipton = {
    price: number,
    kind: "light Taste"
}

type indiaGate = {
    price: number;
    kind: "drakBlack"
}

type basmati = {
    price: number;
    kind: "longGrain"
}
function chooseChai(prepare: chai) {
    switch (prepare.kind) {
        case "light Taste":
            return `lipton`
            break;
        case "drakBlack":
           return `indiaGat`
            break;
        case "longGrain":
            return `basmati`
            break;
    }
}


// Golden Rule

// Use type checks for types, not truthiness

// Explicit null check
function printAl(strs: string | string[] | null) {
  if (strs !== null && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

// WRONG CHECK
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
// if (strs) → ❌ false (empty string is falsy)
// So your function does nothing

// if (strs) is not a type guard
// 👉 It’s a truthy check

// And truthy checks:

// ❌ Remove valid values (like "")
// ❌ Can introduce subtle bugs

type burger = { type: "chicken"; spicy: number };
type pizza = { type: "Domino"; kind: string };

// type food = burger | pizza
// it mean if the property exist then goes further 
function restaurant(order: burger | pizza) {
    if ("spicy" in order) {
        return `customer order burger ${order}`;
    }
    return `that is: ${order} pizza`
}


