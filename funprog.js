// Intro to Functional Programming Concepts
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

     
*/
