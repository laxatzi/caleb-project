// Intro to Functional Programming Concepts
// Elaborate on the Matt Banz article on opensource.com/articles 

/* 
   Javascript is a multi paradigm language that allows you to freely mix and match OOP, Functional, and Procedural paradigms. 
   Recently there 's been a growing trend towards functional programming. 
   In frameworks such as React and Angular, you'll actually get a performance boost by using immutable data structures.
   IMMUTABILITY is a core concept of functional programming. 

   WHAT FUNCTIONAL PROGRAMMING IS NOT

   Lets talk about all the js constructs you should throw out:
   -Loops
   -Variable declarations that are NOT constant (var or let);
   -Void Functions
   -Object Mutations (obj.prop = 5;)
   -Array Mutator Methods (e.g pop, push, reverse etc)
   -Map Mutator Methods (e.g clear, delete, set)
   -Set Mutator Methods (e.g add, clear, delete)

   PURE FUNCTIONS
   A pure function must satisfy both of the following properties:

    - REFERENTIAL TRANSPARENCY
    The function always gives the same return value for the same arguments. This means that the function cannot depend on any mutable state.

    - SIDE-EFFECT FREEDOM 
    The function cannot cause any side effects. Side effects may include I/O (e.g., writing to the console or a log file), modifying a mutable object, reassigning a variable, etc.


*/

// Example of a pure function
function multiply(a, b) {
   return a * b;
 }

// Examples of impure functions
let heightRequirement = 46;

// Impure because it relies on a mutable (reassignable) variable.
function canRide(height) {
  return height >= heightRequirement;
}

// Impure because it causes a side-effect by logging to the console.
function multiply(a, b) {
  console.log('Arguments: ', a, b);
  return a * b;
}

// The following contains several built-n functions in javascript that are impure.
// Can you state which one of the two properties each one does not satisfy?
/* 
   - console.log();
   -element.addEventListener
   -Math.random
   -Date.now
   -$.ajax(where $==the Ajax library of your choice)

   Living in a perfect world, all our functions would be pure, but as you can tell from the above list, any meaningful program will certainly contain impure functions.
   Most of the time we will need to make an AJAX call, check the current date, or get a random number. 
   A good rule of thumb is to follow the 80/20 rule.

   There are several benefits to pure functions:
     -They are easier to debug and reason about, coz they don't depend on mutable state.
     -The return value can be cashed or "memorized" to avoid recomputing in the future.
     -They are easier to test coz there are no dependencies that need to be mocked. 

     If a func you are using is void (no return value), that is a clue that is impure. If the function has no return value, then either it is a no-op or causing some side effect. Along the same lines, 
     if you call a function but do not use its return value, you are probably relying on it to do some side effect and it is an impure function. 

     IMMUTABILITY

      Returning on the concept of captured variables, we looked at the canRide function and concluded that it is an impure function since the heightRequirement can be reassigned. 
      It should be emphasized that captured variables do not necessary make a function impure. That is depend on the declaration of it.
      If keyword 'const' is used, meaning that variable cannot be reassigned, then the above function would considered pure.
      But what if instead of a number we had an object that stored all our constants?
     
*/
  const constants = {
    heightRequirement : 46,
    ageRequirement: 8,
    parentRequirement: 'Being present',
  }

  function canRide(height){
    return height >= constants.heightRequirement;
  }

  /* 
      We used 'const' so that the variable cannot be reassigned BUT the object can be MUTATED.
      We need data structures to be immutable.
      To prevent mutation the JS language provides as with the Object.freeze method.
  */

  (function(){
    'use strict';

// CASE 1: The object is mutable and the variable can be reassigned
    let obj1 = { foo: 'bar' };
    // Mutate the object
    obj1.foo = "not bar anymore";
    // Reassign the variable
    obj1 = { message: "This is a new object"};

// CASE 2: The object is mutable but the variable cannot be reassigned
    const obj2 = { foo: 'baz' };
    // Mutate the object 
    obj2.foo = "not baz anymore";
    // Reassigning the variable not possible 
    //obj2 = { message: "New object will create error"}; // Error...

// CASE 3: The object is immutable but the variable CAN be reassigned
   let obj3 = Object.freeze({ foo: 'Cannot be mutated due to the Object.freeze method implemented on me!'});
   //obj3.foo = "unable to mutate the original foo"; // Error...

   // Can still reassign the variable
   obj3 = { message: "i am a new object"};

// CASE 4: The object is immutable and the variable cannot be reassigned
    const obj4 = Object.freeze({ foo: 'I\'not going to change, ever!'});
    // Cannot mutate the object
    // obj4 = "I will chang you someday!"; //Error...

    // Cannot reassign the variable
    // obj4 = { message: "i am a new object" }; // Error...

  }());

  /* 
   IMMUTABILITY is applicable to all data structures including arrays, maps and sets. That means we cannot call mutator methods (array.prototype.unshift). 
   We can create a new array with the same items as the original and augment the original item instead.
   In fact, EVERY mutator method can be replaced by a function that returns a new array with the desired changes.
  */

  (function(){
    "use strict";
 function myFunc(){ return true};

    const numbs = Object.freeze([3,4,5]);

    // instead of numbs.push(6);
    const numbs2 = numbs.concat(6);

    // instead of numbs.pop();
    const numbs3 = numbs.slice((0,-1));

    // instead of numbs.unshift(1,2);
    const numbs4 = (1,2).concat(numbs);

    // instead of numbs.shift();
    const numbs5 = numbs.slice(0,1);

    // instead of numbs.sort(myFunc, numbs);
    const numbs6 = R.sort(myFunc,numbs); // R = Ramda library

    // instead of numbs.reverse(numbs);
    const numbs7 = R.reverse(numbs); // R = Ramda library

  }());

  /* 
        EXERCISE FOR THE READER:
        copyWithin
        fill
        splice

        The same thing goes when using a Map or a Set. We can avoid mutator methods by returning a new Map or Set with the desired changes.
        Sometimes creating new objects instead of mutating existing ones can affect performance (depending on the project). 
        In that case consider using immutable.js 
  */