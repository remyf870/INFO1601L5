let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;

let name = "bob";
let age = 24;

console.log(typeof name);
console.log(typeof age);

console.log(`Hello my name is ${name}, I'm ${age} years old`);

console.log(`I was born in ${2020 - age}`);

console.log("1" == 1);
console.log(1 == true);
console.log("false" == false);
console.log("false" == true);

if ("false") console.log("Hello false!");

console.log("1" === 1);
console.log(1 === true);
console.log("true" === true);

// print 1-50 when  a%3 === 0 print fizz and when a%5 ===0 print buzz and when both === 0 print fizzbuzz

for (let i = 0; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

function happyPrint(string) {
  console.log("😀: " + string);
}

function sadPrint(string) {
  console.log("😢: " + string);
}

//This high-order function adds 2 parameters and passes the answer to the callback
function add(a, b, callback) {
  let ans = a + b;
  callback(ans); // call the callback and pass the answer to it
}

//call add passing the callbacks to it

add(5, 10, happyPrint);
add(11, 12, sadPrint);

//prints current date
function printDate() {
  console.log(Date().toLocaleTimeString());
}

setInterval(printDate, 1000);
