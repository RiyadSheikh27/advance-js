# Object-Oriented Programming (OOP) in JavaScript
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which encapsulate data (properties) and behavior (methods). JavaScript, though originally designed as a prototype-based language, supports OOP concepts like encapsulation, inheritance, and polymorphism.

## Class declaration syntax

```javascript
    class className{

        propertiseA
        propertiseB

        constructor(){

        }
    }
    // Example for Person

    class Person{
        name
        age

        constructor(name,age){
            this.name = name
            this.age = age
        }
        getDetails(){
            return `The person name: ${this.name} and age: ${this.age}`
        }
    }

```


## Syntax of Access modifiers

* **Private** Start the method or properties with the `#`
* **Protected** Start the method or properties with the `_`
* **Public** No need to add any symbol



## Inheritence

### Syntax

```javascript
    class A extens B{
        // TODO: Implementation of class A
    }
```

Using `super()` you can call the parent constructor from child class in inheritence