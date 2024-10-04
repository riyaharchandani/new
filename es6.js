// Arrow function
const add = (x, y) => x + y;
console.log(add(2, 3)); 

//example:
const sub = (x,y) => x - y;
console.log(sub(5, 4));

//Array
let fruits = ['apple', 'banana'];

//adding items
fruits.push('orange');
console.log(fruits);

//array
let friends = ['riya', 'saumya', 'ayesha'];

//removing items
friends.pop('ayesha');
console.log(friends);

//iterating with map
let upperfriends = friends.map(friends => friends.toUpperCase());
console.log(upperfriends);

//filtering
const ages = [32, 33, 16, 60];
const Adultages = ages.filter(ages => 18);
console.log(Adultages);

//using shift and unshift
let people = ['siddharth', 'avinash', 'adeel'];

//adding items to the beginning
people.unshift('mustafa');
console.log(people);

//remove the first element
let firstpeople = people.shift();
console.log(people);
console.log(firstpeople);

//destructuring
//array destructuring
let [Firstname, Lastname] = ['Radhe', 'Radhe'];
console.log(Firstname);
console.log(Lastname);

//object destructuring
let user = {
    id: 1,
    username: 'radheradhe',
    email: 'radhe@gmail.com',
  };

  let { username, email } = user;
console.log(username); 
console.log(email); 

//destructuring in function parameters





