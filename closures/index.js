function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }

  const myFunc = makeFunc();
  myFunc();

  function human(n){
    const name = n;
    function sayHi(){
        console.log(`Hi ${name}`);
    }
    function sayHowYouAre(){
        console.log(`How are you ${name}`);
    }
    return {sayHi, sayHowYouAre};
  }
  const person = human('John');
    person.sayHi();
    person.sayHowYouAre();


    /**
 * Creating a private variable using closures
 */

function counter(){
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
}
const count = counter();
count.increment();
count.increment();
count.increment();
count.decrement();
count.getCount();
console.log(count.count); // undefined because the count variable is private and cannot be accessed from outside the function. It is only accessable through the functions that are returned from the counter function.