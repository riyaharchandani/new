// Map()
// Example 1: Doubling each element in an array
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

//Example 1.1:
const temp = [2, 4, 6, 8];
const  doubled2 =  temp.map(temp => temp* 2);
console.log(doubled2);

//Example 1.2:
let array = [1, 2, 3, 4, 5, 6];
array = array.map(value => value * 2);
console.log(array);

// Example 2: Extracting a property from an array of objects
const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
const userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

//example 2.1:
const obj = [{ a:1}, {a:5}, {a:10}];
const result= obj.map(obj => obj.a);
console.log(result);

// Example 3: Converting array elements to string
const numArray = [10, 20, 30];
const stringArray = numArray.map(num => String(num));
console.log(stringArray); // ['10', '20', '30']
 
//example 3.1:
const myArray = ['HTML', 'CSS', 4];
console.log(myArray);
const myString = myArray.toString();
console.log(myString);

// Example 4: Adding a constant value to each element
const addTen = numbers.map(num => num + 10);
console.log(addTen); // [11, 12, 13, 14]

//example 4.1: 





