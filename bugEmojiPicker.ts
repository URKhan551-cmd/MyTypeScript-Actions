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
