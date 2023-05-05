
// sourc
// https://dev.to/mingt/javascript-introduction-to-scope-function-scope-block-scope-d11
//Global scope
// There's only one Global scope in the JavaScript document. The area outside all the functions is consider the global scope and the variables defined inside the global scope can be accessed and altered in any other scopes.

let fruit = "mango";

const getFruit = () => {
  console.log(fruit);
};

console.log("this", getFruit());

//local scope
// Variables declared inside the functions become Local to the function and are considered in the corresponding local scope. Every Functions has its own scope. Same variable can be used in different functions because they are bound to the respective functions and are not mutual visible.
const outer = () => {
  let item = "laptop"; // local scope
  const inner = () => {
    console.log("this is inner", item); //local scope
  };
  console.log("this is outer", item);
  return inner();
};

console.log("this is console", outer());

//Functional scope
//Whenever you declare a variable in a function, the variable is visible only within the function. You can't access it outside the function. var is the keyword to define variable for a function-scope accessibility.

const basket = () => {
  let fname = "raman";
  console.log("this is inside", fname);
};

basket();
//console.log(fname) // this will be not defined

//Block Scope
//A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block

{
  const foo = () => {
    if (true) {
      var f1 = "mango"; // This have function scope
      let f2 = "banana"; // block level scope
      const f3 = "grapes"; // block level scope
    }
    console.log(f1);
    //  console.log(f2);
    //console.log(f3);
  };
  foo();
}


// laxical scope
//Another point to mention is the lexical scope. Lexical scope means the children scope have the access to the variables defined in the parent scope. The children functions are lexically bound to the execution context of their parents.
const outerLayer = () => {
    var clothType = 'Jeans';
    let clothType2 = 'shirt';
    const clothType3 = 'Pant';
    const innerLayer = () => {
        console.log(clothType);
        console.log(clothType2);
        console.log(clothType3);
    }
    innerLayer();
}
//all variabler are is in laxical scope
outerLayer();