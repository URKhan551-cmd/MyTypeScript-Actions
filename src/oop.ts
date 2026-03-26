// TypeScript OOP is built on top of JavaScript’s prototype system, not classical OOP like Java or C++.
// class in TypeScript = syntactic sugar over prototypes
// TypeScript adds static typing + compile-time safety

class User {
  name: string

  constructor(name: string) {
    this.name = name
  }

  greet() {
    return `Hello ${this.name}`
  }
}
// Under the Hood (Important)

// class User {}
// function User(name) {
//   this.name = name
// }

// User.prototype.greet = function () {}


class shoes {
    kind: string;
    price: number

    constructor(kind: string, price: number) {
        this.kind = kind
        this.price = price
    }
}

const store = new shoes("nike", 70)
store.kind = "nike"


// Encapsulation (Data Protection)
// Access Modifiers
// Reality Check
// 👉 private in TypeScript is compile-time only
// At runtime (JS), it still exists.
// If you want true runtime privacy, use:
// class Secure {
//   #secret = 123
// }


class BankAccount {
  public owner: string
  private balance: number
  protected pin: number

  constructor(owner: string, balance: number, pin: number) {
    this.owner = owner
    this.balance = balance
    this.pin = pin
  }
}


class brand {
    public name: string = "Adidas"
    private logo: string = "card"
// reveal is a method wher einside the class we created private key we can access by help of reveal not directly
    reveal() {
        return this.logo   //ok
    }
}

// const newBrand = new brand()
// newBrand.reveal()
// newBrand.name



class toProtect {
    // protected is a staff door where we can accesssinside the class orrr inherit from that class then we xan access
    protected shopName = "italian boutique"
}

class branch extends toProtect{
    getName() {
        return this.shopName  // nowthis is tottally okkkk 
    }
}
new branch().getName   // we can access the protected key by help of getName method 
 // tihs is the way of inheritance from toProtect to nranch

class wallet{
    #balance = 890089   // this is an alternative way of cretaing pribate key but writting a private keywordfor a key is much better


    getBalance() {
        return this.#balance
    }
}

const w = new wallet()
w.getBalance       


class restrictVal{
    readonly saving: number = 88888  // no modification happen

    constructor(saving: number) {
        this.saving = saving
    }
}



// GETTER SETTER HOW TO USE IN TS

class modern {
    private _style = 2026  // to access this value we have to use getter and setter

    get style() {
        return this._style
    }

    set style(value: number) {
        if (value > 5) throw new Error("too stylish")
            this._style = value
    }
}

const newModern = new modern()
newModern.style = 3



class NewVal{
    static shopName = "my store value"

    constructor(public products : string) {
        
    }
}
console.log(NewVal.shopName)


// Abstraction (Hiding Complexity)
// ✅ Abstract Classes
// Why Use Abstract?
// Define contract + partial implementation
// Force subclasses to implement required methods
 abstract class Animal {
   abstract makeSound(): void
   move() {
     console.log("Moving...")
   }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark")
  }
}



abstract class Drink{
    abstract make(): void

}
class juices extends Drink{
    make() {
        console.log("strawberry juices")
    }
}


// COMPOSITION CONCEPT

class Ice {
    iceCubes(){}
}

class fridge{
    constructor(private salaja: Ice) { }
        make(){
            this.salaja.iceCubes
        }
    
}



// Inheritance (Code Reuse)
class afghan {
  move() {
    console.log("Moving")
  }
}

class pathan extends afghan {
  hospitable() {
    console.log("land of hospitality")
  }
}


// Polymorphism (Multiple Behaviors)
// ✅ Method Overriding
// class Animal {
//   speak() {
//     console.log("Some sound")
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Bark")
//   }
// }


// Dependency Injection (Real Engineering Pattern)
// interface Logger {
//   log(msg: string): void
// }

// class ConsoleLogger implements Logger {
//   log(msg: string) {
//     console.log(msg)
//   }
// }

// class Service {
//   constructor(private logger: Logger) {}

//   doWork() {
//     this.logger.log("Working")
//   }
// }


// Real-World Example (Production-Level)
interface Repository<T> {
  findAll(): T[]
}

class UserRepo implements Repository<string> {
  findAll() {
    return ["Ali", "Sara"]
  }
}

class UserService {
  constructor(private repo: Repository<string>) {}

  getUsers() {
    return this.repo.findAll()
  }
}