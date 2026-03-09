let radius = 7;
const pi = 3.14;
let area = radius * radius * pi;
console.log(area);

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

for (let i = 1; i <= 50; i++) {
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

function add(a, b, callback) {
  let ans = a + b;
  callback(ans);
}

add(5, 10, happyPrint);
add(11, 12, sadPrint);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [-5, 16, 33, 42, 103, 344];

console.log(arr2.includes(-5));

arr2.push(11);
console.log(arr2);

let lastItem = arr2.pop();
console.log(lastItem, arr2);

arr2.unshift(22);
console.log(arr2);

let firstItem = arr2.shift();
console.log(firstItem, arr2);

let reversed = arr2.reverse();
console.log(reversed);
console.log(arr2.join("-"));

let arr3 = [12, 33, 4, 5, -4, 8, 19, 25];

function double(num) {
  return num * 2;
}
let doubledArr = arr3.map(double);
console.log(doubledArr);

function isOdd(num) {
  return num % 2 !== 0;
}
let odds = arr3.filter(isOdd);
console.log(odds);

function has5Factor(ele) {
  return ele % 5 === 0;
}
let hasFiveFactor = arr3.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b) {
  return a - b;
}
let ascending = arr3.sort(intCompare);
console.log(ascending);

function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    sum += calcBMI(person.weight, person.height);
  }
  return sum / people.length;
}

let people = [
  createPerson("Sally", 2.5, 60),
  createPerson("Ben", 3, 81),
  createPerson("Shelly", 1.7, 50),
];

console.log(avgBMI(people));

let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    { course: "INFO 1603", grades: [89, 34, 67] },
    { course: "INFO 1601", grades: [89, 34, 67] },
  ],
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [{ course: "INFO 1601", grades: [100, 89, 79] }],
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [{ course: "INFO 1600", grades: [89, 34, 67] }],
};

const students = [bob, sally, paul];

// structure of objects to access grades:
// transcript is a key value of the students object
// transcript is an array with one object in it
// grades is a key in the transcript key
// grades is an array of grades

function getAverageGrade(student, course) {
  for (let entry of student.transcript) {
    if (entry.course === course) {
      let sum = 0;
      for (let grade of entry.grades) sum += grade;
      return sum / entry.grades.length;
    }
  }

  return -1;
}

function getAssignmentMark(student, course, num) {
  for (let entry of student.transcript) {
    if (entry.course === course) {
      return entry.grades[num];
    }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment) {
  let sum = 0;
  let count = 0;
  for (let student of students) {
    let mark = getAssignmentMark(student, courseName, assignment);
    if (mark !== -1) {
      sum += mark;
      count++;
    }
  }
  return count === 0 ? -1 : sum / count;
}

console.log(getAverageGrade(bob, "INFO 1601"));
console.log(getAssignmentMark(sally, "INFO 1601", 0));
console.log(averageAssessment(students, "INFO 1601", 1));
