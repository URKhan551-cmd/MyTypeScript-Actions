// BUILD A BUG EMOJI PICKER 
// this will be quite interesting to practice typescript with that project 
// we will work on this tomorrow with all possible best code paradime


// An abstract class in TypeScript is a base class that cannot be instantiated directly. 
// Instead, it serves as a structural blueprint or foundation for other classes to inherit from (extend

// Key CharacteristicsNo Direct Instantiation: You cannot use new MyAbstractClass(). It will throw a compile-time error.
// Abstract Methods: You can declare methods with the abstract keyword. 
// These methods only have a signature (no body) and must be implemented by any child class that extends it.
  // Concrete Methods: You can write standard, fully coded methods that child classes automatically inherit and share.
// Runtime Presence: Because they compile down to standard JavaScript classes, they exist at runtime, allowing you to use features like instanceof


// 1. Define the abstract blueprint
abstract class PaymentProcessor {
  // Concrete method: All payment types share this logic exactly as it is
  logTransaction(amount: number): void {
    console.log(`Processing payment of $${amount}`);
  }

  // Abstract method: Every specific processor MUST write its own implementation
  abstract processPayment(amount: number): boolean;
}

// 2. Extend the blueprint into a functional class
class StripeProcessor extends PaymentProcessor {
  // Implementing the required abstract method
  processPayment(amount: number): boolean {
    console.log("Connecting to Stripe API...");
    return true; 

  }
}

// 3. Usage
// const base = new PaymentProcessor(); // ❌ Error: Cannot create an instance of an abstract class.

const stripe = new StripeProcessor();    //  Success
stripe.logTransaction(100);             //  Inherited: "Processing payment of $100"
stripe.processPayment(100);             //  Custom: "Connecting to Stripe API..."


// emoji: The name of the property.!: The definite assignment assertion operator. It tells TypeScript: "Trust me,
// this property will be assigned a value later at runtime, 
// so don't throw a compile error for it being uninitialized in the constructor.":
  // T: Links the property to the generic type parameter passed into the Bug class.

// emojiElement!: HTMLParagraphElement;: Declares the property on the class so it can hold the 
// HTML element.constructor(emojiElement: HTMLParagraphElement): Accepts the incoming element when a new instance of a child 
// class is created.this.emojiElement = emojiElement;: Properly binds the incoming parameter to your class property


// In TypeScript, you must use the abstract keyword before the method name, 
// and you do not provide a method body {} because abstract methods are only declarations.
// Added abstract: This tells TypeScript that this method has no implementation here and must be written inside 
// any subclass.Removed the block {}: Abstract methods only define the signature (render(): void;), 
// leaving the actual logic to the child classes.

abstract class Bug<T> {
   emoji!: T;
   emojiElement!: HTMLParagraphElement;  
  constructor(emojiElement: HTMLParagrahElement){
    this.emojiElement = emojiElement;
  }

  
  abstract render (): void;
}

// Since Bee is a concrete class extending an abstract class, 
// you must do two things:Call super(emojiElement) inside the constructor to pass the HTML element up to the parent Bug class.


class Bee extends Bug<string>{
  constructor(emojiElement: HTMLParagraphElement){
   // Pass the element up to the parent Bug constructor
    super(emojiElement);
    
    // You can also initialize your emoji string here
    this.emoji = "🐝"; 
  }

  // Uses 'override' to cleanly implement the abstract method from the parent class
  override render(): void {
    this.emojiElement.innerText = this.emoji;
  }
}

// override render(): void: Fulfills the abstract requirement from the Bug 
// base class.this.emojiElement.innerText = this.emoji;: Dynamically injects the spider emoji ("🕷️") into your HTML paragraph element.

class Spider extends Bug<string> {
  constructor(emojiElement: HTMLParagraphElement) {
    super(emojiElement);
    this.emoji = "🕷️";
  }
  
  override render(){
    this.emojiElement.innerText = this.emoji;
  }
}




// instanceof HTMLSelectElement: This natively checks if the object exists and
// belongs to the HTML <select> element class at runtime.element is HTMLSelectElement: 
// This is a TypeScript Type Guard return type. It tells TypeScript that if this function returns true, 
// the element parameter can safely be treated as an HTMLSelectElement anywhere else in your code.
function isSelect(element: EventTarget | null): element is HTMLSelectElement{
  return element instanceof HTMLSelectElement;
}

// In TypeScript, the non-null assertion operator (!) must be placed right after the function expression 
// that returns the potentially null value (in this case, document.getElementById(...)).

// Placement of !: Placing ! immediately after document.getElementById("bug-emoji") tells TypeScript: 
// "I am certain this DOM query will find an element, so do not treat the return value as null.
// "Type Inference: TypeScript automatically infers that bugEmojiElement is a concrete HTMLElement rather than HTMLElement | null.

const bugEmojiElement = document.querySelector<HTMLParagraphElement>('#bug-emoji')!;



// In TypeScript, Record<string, Bug<string>> is a built-in utility type that defines the shape of an object 
// dictionary (or a map).It explicitly tells TypeScript exactly what kinds of keys and values are allowed 
// inside the 
// object:typescriptRecord< KEY_TYPE , VALUE_TYPE >

// string (The Key): Every key (property name) added to this object must be a plain string 
// (for example: "bee", "spider", or "ant").Bug<string> (The Value): Every value assigned to 
 // those keys must be an instance of a class that inherits from Bug<string> (like your Bee or Spider instances).
const bugMap: Record<string,  Bug<string>> = {
   bee: new Bee(bugEmojiElement),
  spider: new Spider(bugEmojiElement),

}

// new Bee(bugEmojiElement): Instantiates a new concrete Bee class, 
// passing your stored HTML element into its constructor.bugMap["bee"] = ...: 
// Pairs the string key "bee" to that specific instance inside the record, making it easy to fetch dynamically later.
