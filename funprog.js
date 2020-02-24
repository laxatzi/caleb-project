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

 /* 
      FUNCTION COMPOSITION 
      
      In algebra we have learnt function compositions
      (f*g(x) = f(g(x)) it reads f composed with g
      In functional programming, ideally, the entire program will be nothing but function composition
      There will be 'no loops' in code. 
      Let's talk about a couple of important points regarding function composition:
         1. We can compose ANY number of functions (not just two).
         2. A common way to compose functions is simply to take the output from the one function and pass it to the next (e.g f(g(n(x))))
 */

 // example
 (function(){
    'use strict';

    function h(x){
      return x + 1;
    }

    function g(x){
      return x * x ;
    }

    function f(x){
      return x.toString();
    }

    const y = f(g(h(1)));
    console.log(y); // '4'

 }());


   /* 
      There are libraries such as Ramda and lodash that provide a more elegant way of composing functions. Instead of simply passing the return value from one function to the next, they treat function composition in a  mathematical sense.
       So in Ramda the above example would be:
       // composite constant
       const composite = R.compose(f,g,h);

       // Execute 
       const y = composite(1);
       console.log(y); // '4'
   */

   // RECURSIONS
   /* 
      A 'recursive function' is one that invokes itself until a certain condition is met. It is a useful tool to use when iterative processes are involved. 
      A common example is a function that calculates the factorial of a number:
   */
  // using a loop we would write as follows:

  function iterativeFactorial(n){
    let product = 1;
    for(let i =1; i<=n; i++){
       product *= i;
    }
    return product;
  }

  console.log(iterativeFactorial(3)); //6

  // using the functional approach
  // since the functional approach eliminates the need to continually reassign variables  we need to use recursions to solve the factorial problem

  // Recursion asks us to break the problem down to sub-problems that resemble the overall problem.
  // Computing a factorial n! is like isolate n and multiply it by (n-1)! (thus n-1 reduces itself gradually until it meets certain criteria ).
  // Now we have find a sub problem to solve (n-1)! that resembles the overall problem n!
  // We need to have a base case to stop the recursion
  // since min number to multiply the number is 1 we would think of n===1 as the base case.
  // But due to complex math stuff we came to the conclusion that n===0 is the actual base case since 0! is defined to be 1.

  function recursiveFactorial(n){
    // Base case
    if(n === 0) {
      return 1; // 0! === 1
    }
    return n * recursiveFactorial(n-1); 
  }
/* 
    STACK TRACE the above recursive function

    n = 3
  **r = 3*2 => n = 2
               r= 2 *1 => n =1
                          r = 1 *1  => n = 0
                                       r= 1

  ** (final ...since the stack traces from bottom to top... return value) 
                              
*/

// TAIL CALL OPTIMIZATION
/* 
    Tail call optimization is a technique used to improve the recursive performance of a program.
    It is a clever trick that eliminates the memory overhead of recursion. 
    It allows the browser to omit stack frames if the last thing that the recursive function does is call itself and return the result.

    In the stack we traced above, after the recursive function call there is still an additional computation to be made (i.e r*n or 3*2[line 257])

    That means that the browser cannot optimize it using PTC; however, we can rewrite(optimize) the function in such a way that the last step is the recursive call. One trick to achieve this is to pass the intermediate result (in our case the 'product' ) into the function as an argument.

    
*/
(function(){
  "use strict";

   // tail call optimized
   function factorial(n, product=1){
     if(n===0){
       return product;
     }
     return factorial(n-1, product*n);
   }
console.log(factorial(3)); // 6

}());// end of code

// lets visualize the above stack trace
/* 
    In this case the stack grow no more than two frames.
    The reason is that we pass all the necessary info (i.e product) into the function
    so after the product has been updated, the browser can throw out the stack frame.

    n=3
    p=1
    r =>
        n=2
        p=2
        r =>
            n=1
            p=6
            r => 
                n=0
                r = p (return product when base is reached)

*/

// Higher Order Functions
 /* 
    In JS we can pass a function as parameter to another function and we can also return a function from a function
    this are first-class functions that can be passed around just like any other value.
    One way to think of a higher order function is: it is a function that accepts a callback function.
    Example of using built in higher order functions
 */

 (function(){
    "use strict";
    const vehicles = [
      {
        brand: "Honda",
        model: "CR-V",
        type: "Suv",
        price: 24050
      },
      {
        brand: "Toyota",
        model: "Yaris",
        type: "City",
        price: 13077
      },
      {
        brand: "Opel",
        model: "Astra",
        type: "Sedan",
        price: 17800
      },
      {
        brand: "Ford",
        model: "Explorer",
        type: "Suv",
        price: 32440
      }
    ];

    const avgSuvPrice = vehicles.filter(v => v.type === 'Suv')
                                .map(v => v.price)
                                .reduce((sum, price, i, array) => sum + price / array.length, 0);
    
    console.log(avgSuvPrice); // 28245

 }());// wrapper IIFE end 

 /* 
     In the above example we call methods on an array object, which is characteristic of OOP. If we wanted to make it a bit more representative of functional programming, we could use functions provided by the Ramda library.
     Note that in Ramda the mean function is used instead the reduce function:
 */

 (function(){
    "use strict";
    const vehicles = [
      {
        brand: "Honda",
        model: "CR-V",
        type: "Suv",
        price: 24050
      },
      {
        brand: "Toyota",
        model: "Yaris",
        type: "City",
        price: 13077
      },
      {
        brand: "Opel",
        model: "Astra",
        type: "Sedan",
        price: 17800
      },
      {
        brand: "Ford",
        model: "Explorer",
        type: "Suv",
        price: 32440
      }
    ];

   // Using pipe (executes the functions from top to bottom)
      const avgSuvPrice = R.pipe(
        R.filter(v => v.type === 'Suv'),
        R.map(v => v.price),
        R.mean
      )(vehicles);

      console.log(avgSuvPrice); //  28245

   // Using compose (executes the functions from bottom to top)
      const avgSuvPrice = R.compose(
        R.mean,
        R.map(v => v.price),
        R.filter(v => v.type === "Suv")
        )(vehicles);

      console.log(avgSuvPrice); // 28245
}()); // wrapper IIFE end

// The advantage of the functional approach is that it separates the data (i.e vehicles) from the logic(filter, map, reduce) in contrary with OOP patterns.


// CURRYING

/* 
    A function is said to be 'curried' when not all arguments have been supplied to the function, so it return another function that retains the arguments given and expects the remaining.
    example:
*/
    (function(){
      'use strict';
      function multiplier(x,y){
        if(y === undefined){
            return function(z){
              return z * x;
            }
        }else{
          return x * y;
        }
      }

    }());//end wrapper iife

    console.log(multiplier(4,5)); // two arguments so the console logs 20
    // one argument
    const quadraple = multiplier(4);
    console.log(quadraple(4)); // 16

    }());//end wrapper iife
/* 
    Informally, Currying is the process of taking a function that accepts 'n' args and turning it to n functions that each of them accepts a single arg.
    Arity = is the number of args or operands that a function or operation in logic, maths, and CS takes.
    Function that accepts a single argument/operand = unary
    Function that accepts two arguments = binary
    Function that accepts three arguments = ternary 
    Function that accepts n arguments = n-ary

    Therefor we can define currying as the process of taking an n-ary function and turning it into n unary functions. Let's start with a simple example, a function that takes the dot product of two vectors. 
    Recall from linear algebra that the dot product of two vectors [a, b, c] and [x, y, z] is equal to ax + by + cz.
    The dot function is 'binary' since it accepts two arguments (vectors), however, we can MANUALLY convert it into two unary functions, as the following example shows.
*/

(function(){
  "use strict";
  function curriedDot(vector1){
    return function(vector2){
      return vector1.reduce((sum, element, index) => sum =+ element * vector2[index], 0);
    }
  } // end of function 

  // taking the dot product of any vector with [1,1,1]
  // is equivalent to summing up the elements of the other vector

  const sumElements = curriedDot([1,1,1]);

  console.log(sumElements([1,3,-5]));//-1
  console.log(sumElements([4,-2,-1])); //1

}()); // wrapping IIFE end

/* 
    Fortunately, thanks to libraries like Ramda, we don't have to convert each one of our functions to a curried form. 
    In fact, they do a hybrid type of currying, where you can either call the function one arg at a time, or you can continue to pass the args at once, just like the original.

*/

(function(){
  "use strict";
  function dot(vector1, vector2) {
    return vector1.reduce((sum, element, index)=> sum += element * vector2[index], 0);
  }
  const vec1 = [1,3,-5];
  const vec2 = [4, -2, -1];

  // use Ramda to do the currying for us
  const curriedDot = R.curry(dot);

  const sumElements = curriedDot([1,1,1]);

  console.log(sumElements(vec1)); // -1
  console.log(sumElements(vec2)); // 1

  // You can still call the curried function with two args
  console.log(curriedDot(vec1, vec2)); // 3

}());//end wrapper iife

// PARTIAL APPLICATION
/* 
    Both Ramda and lodash allow you to "skip over" an argument and specify it later.
    They do this using a placeholder. 
    Ramda specifically uses a double underscore as a placeholder
    Example:
 */
(function(){
  "use strict";

  const giveMe3 =  R.curry(function(item1, item2, item3){
    return `
      1: ${item1} 
      2: ${item2}
      3: ${item3}
    `;
  });
  // giveMe2
    const giveMe2 = giveMe3(R.__, R.__, "French Hens"); // specify the third argument
    const giveMe1 = giveMe2('Partridge in a pear tree'); // This will go in the first slot
    const result = giveMe1('Turtle Doves');// Finally fill the second argument

    console.log(result); // 1: French Hens 
                        // 2: Partridge in a pear tree
                        // 3: Turtle Doves

}());//end wrapper iife

// Partial application and Currying

/* 
    Partial application and currying often go hand in hand. A curried function is still a curried function even if it hasn't been given any arguments.
    Partial application, on the other hand, is when a function has been given some, but not all, of the arguments.
    Currying is often used to do partial application, but it is not the only way.

    The javascript language has a built in mechanism for doing partial application without curring.
    This is done using the 'function.prototype.bind' method. One idiosyncrasy of this method is that it requires you to pass the value of 'this' as the first argument. If you are not doing OOP, then you can ignore 'this' by passing in 'null'.
    Example:

*/

(function(){
  'use strict';
  function giveMe3(item1, item2, item3){
    return `
      1: ${item1}
      2: ${item2}
      3: ${item3}
    `;
  }

   const giveMe2 = giveMe3.bind(null, 'rock');
   const giveMe1 = giveMe2.bind(null, 'paper');
   const result = giveMe1.bind( 'scissors');

   console.log(result); // 

}());//end wrapper iife