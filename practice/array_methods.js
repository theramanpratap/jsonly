// source 
// https://javascript.info/array

// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// console.log(shopping);

// const itemList = shopping.map((item, i) => {
//     console.log(i, item);
// })

//Methods pop/push, shift/unshift

//push -> appends an elements to the end
//shift -> get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// Arrays support both operations.

// In practice we need it very often. For example, a queue of messages that need to be shown on-screen.

// There’s another use case for arrays – the data structure named stack.

// It supports two operations:

// push adds an element to the end.
// pop takes an element from the end.
// So new elements are added or taken always from the “end”.
//A stack is usually illustrated as a pack of cards: new cards are added to the top or taken from the top:

let fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.pop() ); // remove "Pear" and alert it

console.log( fruits ); // Apple, Orange

//push
//Append the element to the end of the array:

let fruitsnew = ["Apple", "Orange"];

fruitsnew.push("Pear");

console.log( fruitsnew ); // Apple, Orange, Pear


// Methods that work with the beginning of the array:

// shift
// Extracts the first element of the array and returns it:

let fruitsShift = ["Apple", "Orange", "Pear"];

console.log( fruitsShift.shift() ); // remove Apple and console.log it

console.log( fruitsShift ); // Orange, Pear

// unshift
// Add the element to the beginning of the array:

let fruitsUnshift = ["Orange", "Pear"];

fruitsUnshift.unshift('Apple');

console.log( fruitsUnshift ); // Apple, Orange, Pear

// nnssbbu - Data types
// Number
// null
// String
// Symbol
// BigInt
// Boolean
// undefined