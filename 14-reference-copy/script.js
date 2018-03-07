// start with strings, numbers and booleans
// Let's say we have an array
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name = "Daria";
// let name2 = name;
// console.log(name, name2);
// name = "wef";
// console.log(name, name2);

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.

// const team = players;
// console.log(team, players);
// team[3] = "Lux";
// You might think we can just do something like this:
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice();
team2[3] = "Lux";

console.log(team2);
console.log(players);

// or create a new array and concat the old one in
const team3 = [].concat(players);
console.log(team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "whatever";
console.log(team4);
// now when we update it, the original one isn't changed

const team5 = Array.from(players);
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};
// and think we make a copy:

const captain = person;
captain.number = 99;
console.table(person);
// how do we take a copy instead?
// We will hopefully soon see the object ...spread
const cap2 = Object.assign({}, person, {
  number: 109
});
console.table(cap2);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it
console.table(person);
console.table(captain);

const cap3 = { ...person
};
console.table(cap3);

const daria = {
  name: "daria",
  age: 100,
  social: {
    twitter: "blah",
    facebook: "gerghjwg"
  }
}

console.table(daria);

const dev = Object.assign({}, daria);

const dev2 = JSON.parse(JSON.stringify(daria));
console.table(dev2);
dev2.social.twitter = "something";
console.table(dev2.social);