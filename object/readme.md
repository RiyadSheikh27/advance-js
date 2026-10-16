# JavaScript Object
A JavaScript object is a variable that can store multiple values in key-value pairs. In JS object the key called as property. The property value could be a function. It's called as method. 
## Syntax
You can define the object in JS by crating an instance of Object class using new keyword. Or you can use the object literal.

```javascript
// Object Constructor
const product = new Object();
product.name = "Apple";
```

```javascript
// Object Literal
const product = {
    "name" : "Apple"
};
```

### The property value could be function

```javascript
const car = {
    "model" : "Toyota",
    "color" : "🔵",
    "stock_in": 10,
    "stock_out":4,
    "available":function(){
        return this.stock_in - this.stock_out;
    }
};
```

**The JS object are mutuable**