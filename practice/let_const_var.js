//Source 
// https://medium.com/nerd-for-tech/var-let-and-const-in-javascript-15e41cf90f01

//In JavaScript, var, let, and const are three ways of creating variables. Here, we will talk about the scope and difference between these three ways.

// Var 
//Variables declared using var keyword scoped to the current execution context. This means If they are inside a function we only can access them inside the function. and If they are not they are part of the global scope which we can access anywhere. look at the example below to better understanding.

var fruit = 'Apple';

console.log(fruit);

const someFucntion = () => {
    var vegitable = 'carrot' 
    console.log(vegitable); // prints carrots 
    console.log(fruit) // prints Apple
}

//console.log(vegitable); //will give error as it is 


// Let
// This is the improved version of var declarations. Variables declaration using this way eliminates all the issues that we discussed earlier. let creates variables that are block-scoped. Also, they can not be redeclared and can be updated. The below example shows it is the best choice to use let than var.

let laptop = 'lenovo'
console.log(laptop) // prints lenovo

const outer = () => {
    let laptop = 'samsung';
    console.log(laptop);
} 
outer(); //prints samsung

//let laptop = 'hp' //will give error

laptop = 'hp'
console.log(laptop); // prints HP


// const
// Const variables are cannot be updated or redeclared. This way is used to declare constants. Same as the let declarations const declarations are block-scoped. Unlike var and let, If we are using const to declare a variable that must be initialized

const fruit2 = 'aalo';
console.log(fruit2); // Prints aalo

const getResult = () => {
    const fruit2 = "chikoo";
    console.log(fruit2);
}

getResult();  // Prints chikoo

//const fruit2 = 'grapes'; // Error
 
//fruit2 = 'orange'; // Error
console.log(fruit2); // Prints aalo



