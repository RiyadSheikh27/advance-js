"use strict";
const car = Object.create(null)
const carJson = {
    "model" : "Toyota",
    "color" : "🔵",
    "stock_in": 10,
    "stock_out":4,
};

const carList = {
    "0":"BMW",
    "1":"Nissan",
    "2":"Toyota"
};

Object.assign(car,carJson) // copies object from src object to target obj

console.log(Object.isSealed(car))
Object.seal(car)
car.name = "H1"; //this line throw an error. because this object is seal for adding,updating and deleting 
console.log(Object.isExtensible(car))
console.log(Object.isSealed(car))

console.log(Object.freeze(car))
Object.defineProperties(car,{
    "model":{
        value:"Test",
        writable:true
    }
})

Object.defineProperty(car,"brand",{
    value:"Toyota 2025",
    writable:true,
    enumerable: true,
    
})
console.log(car)

// console.log(Object.getOwnPropertyDescriptors(car))


/**
 * Object Getter & Setter 
 * Why we do not define the getter & setter method in the above define property for brand?
 * You can not define the Data Properties(value,writeable,enumerable,configurable), and Accessor Properties(getter,setter) in the same time
 * Mutual Exclusivity:
 * You cannot mix value or writable with get or set in the same property descriptor.
 */

Object.defineProperty(car, "engine", {
    get: function () {
        return "The Engine is " + (this._engine || "unknown");
    },
    set: function (value) {
        this._engine = value;
    },
    enumerable: true,
    configurable: true,
});

// Using the getter and setter
car.engine = "Japani"; // Triggers the setter
console.log(car.engine); 