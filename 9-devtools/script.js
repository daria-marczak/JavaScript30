const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Regular
console.log("hello");

// Interpolated
console.log("hello i am a % string");

// Styled
console.log("%cIam some great text", "font-size: 56px; background: red;");

// warning!
console.warn("Oh no");

// Error :|
console.error("sorry");

// Info
console.info("this goes here blah");

// Testing
console.assert(1 === 2, "that's wrong");
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong");

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);
console.log(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`This is ${dog.name}, he's ${dog.age} years old`);
  console.log(`He is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`)
});

// counting
console.count("dog");
console.count("cat");
console.count("dog");
console.count("cat");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });