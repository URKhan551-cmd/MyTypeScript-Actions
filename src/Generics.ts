// generics are also templates / can be unknown pass it unknow and final return as unknown
// what does that mean  <T> this T is data type it can be string can be number bolean and many more
// here in this function we will pass param as data type T and so here params are item which has data T and return type Also T[] Array of T\

function wrapInArray<T>(item: T): T[]{
  return [item]
} 
// this is called extandables 
wrapInArray("khann");
wrapInArray(56);
wrapInArray(["khan", 78])
wrapInArray({ flavour: "ginger" });

function made<A, B>(a: A, b: B): [A, B] {
    return [a, b];  // here <A, B> is the signature of how parameters should pass and in the same way should be return
}

made("masala", "khan")
made("khan", 786);
made(["string"], 786);
made(true, false);
made(true, "khan");
made([78], [786]);
made("khannhjh", { flavour: "ginger" });


// here we have now generic inteerface

interface Box<T>{
    content : T
}

const numberBox: Box<number> = {
    content: 89  // here we define in interface the structure has data type number and the content should also be a number.
}
const numberBoxCup: Box<string> = { content: "150ml" }; // here is the same concept has been repeat

// generic works with classes, utilities like readonly, partial, omit, required.


// how to handle an api by help of generic interfaces
interface ApiResponse<T>{
    status: number,
    data: T
}

const res: ApiResponse<{ flavour: string }> = {
    status: 200,
    data: {flavour: "masasla"}
}
